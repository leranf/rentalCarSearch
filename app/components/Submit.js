import React from 'react';
import { connect } from 'react-redux';
import { searchForCars } from '../actions/search';

const mapStateToProps = state => ({
  location: state.location,
  date: state.date,
  time: state.time
});

const mapDispatchToProps = dispatch => ({
  submitForm: (location, date, time) => dispatch(searchForCars(location, date, time))
});

const Submit = ({location, date, time, submitForm}) => (
  <div className="container">
    <button onClick={() => submitForm(location, date, time)}>Send</button>
  </div>
);

Submit.propTypes = {
  submitForm: React.PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired,
  date: React.PropTypes.object.isRequired,
  time: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
