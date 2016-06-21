const initialState = {
  results: []
};

const carResults = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CAR_RESULTS':
      return Object.assign({}, state, {
        results: action.payload
      });
    default:
      return state;
  }
}

export default carResults;