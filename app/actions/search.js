export const setPickUpLocation = pickUplocation => ({
  type: 'SET_PICK_UP_LOCATION',
  payload: pickUplocation
});

export const setPickUpDate = pickUpDate => ({
  type: 'SET_PICK_UP_DATE',
  payload: pickUpDate
});

export const setDropOffDate = dropOffDate => ({
  type: 'SET_DROP_OFF_DATE',
  payload: dropOffDate
});

export const setPickUpTime = pickUpTime => ({
  type: 'SET_PICK_UP_DATE',
  payload: pickUpTime
});

export const setDropOffTime = dropOffTime => ({
  type: 'SET_DROP_OFF_DATE',
  payload: dropOffTime
});

export const setCarResults = results => ({
  type: 'SET_CAR_RESULTS',
  payload: results
});

export const getCarResults = () => ({
  type: 'GET_CAR_RESULTS'
});

export const searchForCars = (location, date, time) => 
  dispatch => {
    dispatch(getCarResults);
    $.ajax({
      url: '/api/searchHotwire',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
      //   location: location.pickUp,
      //   startDate: date.pickUp,
      //   endDate: date.dropOff,
      //   pickUpTime: time.pickUp,
      //   dropOffTime: time.dropOff
      // })
    })
    .done(res => {
      console.log('responseeee', res);
    })
    // .then(carResults => {
    //   console.log('carResults', carResults);
    //   dispatch(setCarResults(carResults));
    // })
    .fail(err => {
      console.log('error', err);
    });
  };
