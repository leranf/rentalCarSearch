import { combineReducers } from 'redux';
import tripType from './tripType';
import location from './location';
import date from './date';

export default combineReducers({
  tripType,
  location,
  date
});
