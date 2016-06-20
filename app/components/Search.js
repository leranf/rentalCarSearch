import React from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import { toggleTripType, setPickUpLocation, setDropOffLocation, setPickUpDate, setDropOffDate, searchForCars } from '../actions/search';

const mapStateToProps = state => ({
  tripType: state.tripType,
  location: state.location,
  date: state.date,
});

const mapDispatchToProps = dispatch => ({
  changeTripType: type => dispatch(toggleTripType(type)),
  changePickUpLocation: location => dispatch(setPickUpLocation(location)),
  changeDropOffLocation: location => dispatch(setDropOffLocation(location)),
  changePickUpDate: date => dispatch(setPickUpDate(date)),
  changeDropOffDate: date => dispatch(setDropOffDate(date)),
  submitForm: (tripType, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate) => dispatch(searchForCars(tripType, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate))
});

const Search = ({tripType, location, date, changeTripType, changePickUpLocation, changeDropOffLocation, changePickUpDate, changeDropOffDate, submitForm}) => (
  <div className="container">
    <h3>Search Hotwire Cars!!</h3>
    <form>
      <input type="checkbox" onClick={() => changeTripType('roundTrip')} />
      <label>Roundtrip</label>
      <input type="checkbox" onClick={() => changeTripType('oneWay')} />
      <label>One way</label>
      <label>Pick up</label>
      <Geosuggest onSuggestSelect={suggest => changePickUpLocation(suggest.label)}/>
      <label>Drop off</label>
      <Geosuggest onSuggestSelect={suggest => changeDropOffLocation(suggest.label)}/>
      <label>Pick up date</label>
      <input onChange={e => changePickUpDate(e.target.value)}/>
      <label>Drop off date</label>
      <input onChange={e => changeDropOffDate(e.target.value)}/>
      <button type="submit" onClick={() => submitForm(tripType, location.pickUp, location.dropOff, date.pickUp, date.dropOff)}>Send</button>
    </form>
  </div>
);

Search.propTypes = {
  changeTripType: React.PropTypes.func.isRequired,
  changePickUpLocation: React.PropTypes.func.isRequired,
  changeDropOffLocation: React.PropTypes.func.isRequired,
  changePickUpDate: React.PropTypes.func.isRequired,
  changeDropOffDate: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  tripType: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
  date: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
