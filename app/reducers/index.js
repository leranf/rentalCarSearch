import { combineReducers } from 'redux';
import location from './location';
import date from './date';
import time from './time';
import carResults from './carResults';

export default combineReducers({
  location,
  date,
  time,
  carResults
});
