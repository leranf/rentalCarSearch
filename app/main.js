import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';
import 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();

const store = configureStore(window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
