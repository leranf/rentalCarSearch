const initialState = {
  roundTrip: null,
  oneWay: null
};

const tripType = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TRIP_TYPE':
      if (action.payload === 'roundTrip') {
        return Object.assign({}, state, {
          roundTrip: true,
          oneWay: false
        });
      }
      return Object.assign({}, state, {
        roundTrip: false,
        oneWay: true
      });
    default:
      return state;
  }
}

export default tripType;