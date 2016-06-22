const initialState = {
  pickUp: null
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PICK_UP_LOCATION':
      return Object.assign({}, state, {
        pickUp: action.payload
      });
    default:
      return state;
  }
}

export default location;