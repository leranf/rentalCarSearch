const rp = require('request-promise');
const parser = require('xml2json');
const http = require('http');

// exports.carSearch = (req, res) => {
//   // req.assert('name', 'Name cannot be blank').notEmpty();
//   // req.assert('email', 'Email is not valid').isEmail();
//   // req.assert('email', 'Email cannot be blank').notEmpty();
//   // req.assert('message', 'Message cannot be blank').notEmpty();

//   const errors = req.validationErrors();

//   if (errors) {
//     return res.status(400).send(errors);
//   }

//   const options = {
//     uri: 'http://api.hotwire.com/v1/search/car',
//     qs: {
//         apikey: process.env.API_KEY, // -> uri + '?apikey=xxxxx'
//         // dest: req.body.location,
//         // startdate: req.body.startDate,
//         // enddate: req.body.endDate,
//         // pickuptime: req.body.pickUpTime,
//         // dropofftime: req.body.dropOffTime
//         dest: 'LAX',
//         startdate: '06/22/2016',
//         enddate: '06/23/2016',
//         pickuptime: '06:00',
//         dropofftime: '06:00'
//     }
//   };

//   rp(options)
//     .then(results => {
//       const jsonStringResults = parser.toJson(results);
//       const jsonResults = JSON.parse(jsonStringResults);
//       const carTypes = jsonResults.Hotwire.MetaData.CarMetaData.CarTypes.CarType;
//       const carResults = jsonResults.Hotwire.Result.CarResult;
//       res.send({carTypes, carResults});
//     })
//     .catch(err => {
//       console.error('API call failed...', err); 
//     });
  
// };


const searchHotwireAPI = (url, callback) => {
  const req = http.get(url, res => {
    let results = '';

    res.on('data', chunk => {
      results += chunk;
    });

    res.on('end', () => {
      const jsonStringResults = parser.toJson(results);
      const jsonResults = JSON.parse(jsonStringResults);
      const carTypes = jsonResults.Hotwire.MetaData.CarMetaData.CarTypes.CarType;
      const carResults = jsonResults.Hotwire.Result.CarResult;
      callback({carTypes, carResults});
    });

  });

  req.on('error', err => {
    callback(`error: ${err.message}`);
  });

  req.end();
};

// POST - get car search results
exports.carSearch = (req, res) => {
  // req.assert('name', 'Name cannot be blank').notEmpty();
  // req.assert('email', 'Email is not valid').isEmail();
  // req.assert('email', 'Email cannot be blank').notEmpty();
  // req.assert('message', 'Message cannot be blank').notEmpty();
  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  const dest = req.body.location;
  const startdate = req.body.startDate;
  const enddate = req.body.endDate;
  const pickuptime = req.body.pickUpTime;
  const dropofftime = req.body.dropOffTime;
  // const url = `http://api.hotwire.com/v1/search/car?apikey=${process.env.API_KEY}&dest=${dest}&startdate=${startdate}&enddate=${enddate}&pickuptime=${pickuptime}&dropofftime=${dropofftime}`
  const url = 'http://api.hotwire.com/v1/search/car?apikey=pt9hmnp4ngx64vaqtck2hxn3&dest=LAX&startdate=06/22/2016&enddate=06/23/2016&pickuptime=06:00&dropofftime=06:00';

  searchHotwireAPI(url, carSearchResults => {
    res.send(carSearchResults);
  });
  
};







