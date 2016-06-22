const express = require('express');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Router = require('react-router');
const Provider = require('react-redux').Provider;
const mongoose = require('mongoose');
const webpack = require('webpack');
const config = require('./webpack.config');
const rp = require('request-promise');
const parser = require('xml2json');
// Load environment constiables from .env file
dotenv.load({ path: '.env' });

// ES6 Transpiler
require('babel-core/register');
require('babel-polyfill');

// Controllers
const contactController = require('./controllers/contact');

// React and Server-Side Rendering
const routes = require('./app/routes');
const configureStore = require('./app/store/configureStore').default;

const app = express();

const compiler = webpack(config);

mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

const searchForCars = (options, callback) =>
  rp(options)
    .then(results => {
      const jsonStringResults = parser.toJson(results);
      const jsonResults = JSON.parse(jsonStringResults);
      const carTypes = jsonResults.Hotwire.MetaData.CarMetaData.CarTypes.CarType;
      const carResults = jsonResults.Hotwire.Result.CarResult;
      callback({carTypes: carTypes, carResults: carResults});
    })
    .catch(err => {
      console.error('API call failed...', err); 
    });

app.post('/api/searchHotwire', (req, res) => {
  const options = {
    uri: 'http://api.hotwire.com/v1/search/car',
    qs: {
        apikey: process.env.API_KEY, // -> uri + '?apikey=xxxxx'
        // dest: req.body.location,
        // startdate: req.body.startDate,
        // enddate: req.body.endDate,
        // pickuptime: req.body.pickUpTime,
        // dropofftime: req.body.dropOffTime
        dest: 'LAX',
        startdate: '06/22/2016',
        enddate: '06/23/2016',
        pickuptime: '06:00',
        dropofftime: '06:00'
    }
  };

  rp(options)
    .then(results => {
      const jsonStringResults = parser.toJson(results);
      const jsonResults = JSON.parse(jsonStringResults);
      const carTypes = jsonResults.Hotwire.MetaData.CarMetaData.CarTypes.CarType;
      const carResults = jsonResults.Hotwire.Result.CarResult;
      res.send({carTypes, carResults});
    })
    .catch(err => {
      console.error('API call failed...', err); 
    });

});

// React server rendering
app.use(function(req, res) {
  const initialState = {};

  const store = configureStore(initialState);

  Router.match({ routes: routes.default(store), location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = ReactDOM.renderToString(React.createElement(Provider, { store: store },
        React.createElement(Router.RouterContext, renderProps)
      ));
      res.render('layout', {
        html: html,
        initialState: store.getState()
      });
    } else {
      res.sendStatus(404);
    }
  });
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
