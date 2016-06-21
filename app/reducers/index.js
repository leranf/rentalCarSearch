import { combineReducers } from 'redux';
import location from './location';
import date from './date';
import time from './time';

export default combineReducers({
  location,
  date,
  time
});
