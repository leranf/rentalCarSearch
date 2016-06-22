import React from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import Submit from './Submit';
import {setPickUpLocation, setPickUpDate, setDropOffDate, setPickUpTime, setDropOffTime} from '../actions/search';

const mapDispatchToProps = dispatch => ({
  changePickUpLocation: location => dispatch(setPickUpLocation(location)),
  changePickUpDate: date => dispatch(setPickUpDate(date)),
  changeDropOffDate: date => dispatch(setDropOffDate(date)),
  changePickUpTime: time => dispatch(setPickUpTime(time)),
  changeDropOffTime: time => dispatch(setDropOffTime(time)),
});

const Search = ({changePickUpLocation, changePickUpDate, changeDropOffDate, changePickUpTime, changeDropOffTime}) => (
  <div className="container">
    <h3>Search Hotwire Cars!!</h3>
    <form>
      <label>Location</label>
      <Geosuggest onSuggestSelect={suggest => changePickUpLocation(suggest.label)}/>
      <label>Pick up date</label>
      <input onChange={e => changePickUpDate(e.target.value)}/>
      <label>Pick up time</label>
      <input onChange={e => changeDropOffTime(e.target.value)}/>
      <label>Drop off date</label>
      <input onChange={e => changeDropOffDate(e.target.value)}/>
      <label>Drop off time</label>
      <input onChange={e => changeDropOffTime(e.target.value)}/>
      <Submit />
    </form>
  </div>
);

Search.propTypes = {
  changePickUpLocation: React.PropTypes.func.isRequired,
  changePickUpDate: React.PropTypes.func.isRequired,
  changeDropOffDate: React.PropTypes.func.isRequired,
  changePickUpTime: React.PropTypes.func.isRequired,
  changeDropOffTime: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Search);
