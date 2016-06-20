const initialState = {
  pickUp: null,
  dropOff: null
};

const time = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PICK_UP_DATE':
      return Object.assign({}, state, {
        pickUp: action.payload
      });
    case 'SET_DROP_OFF_DATE':
      return Object.assign({}, state, {
        dropOff: action.payload
      });
    default:
      return state;
  }
}

export default time;