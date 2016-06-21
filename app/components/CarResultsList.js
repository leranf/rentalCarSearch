import React from 'react';
import { connect } from 'react-redux';
import CarResultsItem from './CarResultsItem';

const mapStateToProps = state => ({
  carResults: state.carResults.results
});

const CarResultsList = ({carResults}) => (
  <div>
    {carResults.map(carResult => 
      <CarResultsItem key={carResult.id} {...carResult}/>
    )};
  </div>
);

CarResultsList.propTypes = {
  carResults: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(CarResultsList);
