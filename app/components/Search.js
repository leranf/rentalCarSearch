import React from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import { toggleTripType, setPickUpLocation, setDropOffLocation, setPickUpDate, setDropOffDate, setPickUpTime, setDropOffTime, searchForCars } from '../actions/search';

const mapStateToProps = state => ({
  location: state.location,
  date: state.date,
  time: state.time
});

const mapDispatchToProps = dispatch => ({
  changePickUpLocation: location => dispatch(setPickUpLocation(location)),
  changeDropOffLocation: location => dispatch(setDropOffLocation(location)),
  changePickUpDate: date => dispatch(setPickUpDate(date)),
  changeDropOffDate: date => dispatch(setDropOffDate(date)),
  changePickUpTime: time => dispatch(setPickUpTime(time)),
  changeDropOffTime: time => dispatch(setDropOffTime(time)),
  submitForm: (pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, pickUpTime, dropOffTime) => dispatch(searchForCars(pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, pickUpTime, dropOffTime))
});

const Search = ({location, date, time, changeTripType, changePickUpLocation, changeDropOffLocation, changePickUpDate, changeDropOffDate, submitForm}) => (
  <div className="container">
    <h3>Search Hotwire Cars!!</h3>
    <form>
      <label>Pick up</label>
      <Geosuggest onSuggestSelect={suggest => changePickUpLocation(suggest.label)}/>
      <label>Drop off</label>
      <Geosuggest onSuggestSelect={suggest => changeDropOffLocation(suggest.label)}/>
      <label>Pick up date</label>
      <input onChange={e => changePickUpDate(e.target.value)}/>
      <label>Pick up time</label>
      <input onChange={e => changeDropOffTime(e.target.value)}/>
      <label>Drop off date</label>
      <input onChange={e => changeDropOffDate(e.target.value)}/>
      <label>Drop off time</label>
      <input onChange={e => changeDropOffTime(e.target.value)}/>
      <button type="submit" onClick={() => submitForm(location.pickUp, location.dropOff, date.pickUp, date.dropOff, time.pickUp, time.dropOff)}>Send</button>
    </form>
  </div>
);

Search.propTypes = {
  changePickUpLocation: React.PropTypes.func.isRequired,
  changeDropOffLocation: React.PropTypes.func.isRequired,
  changePickUpDate: React.PropTypes.func.isRequired,
  changeDropOffDate: React.PropTypes.func.isRequired,
  changePickUpTime: React.PropTypes.func.isRequired,
  changeDropOffTime: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired,
  date: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
