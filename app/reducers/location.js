const initialState = {
  pickUp: null,
  dropOff: null
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PICK_UP_LOCATION':
      return Object.assign({}, state, {
        pickUp: action.payload
      });
    case 'SET_DROP_OFF_LOCATION':
      return Object.assign({}, state, {
        dropOff: action.payload
      });
    default:
      return state;
  }
}

export default location;