// import fetch from 'isomorphic-fetch';

export const toggleTripType = tripType => ({
  type: 'TOGGLE_TRIP_TYPE',
  payload: tripType
});

export const setPickUpLocation = pickUplocation => ({
  type: 'SET_PICK_UP_LOCATION',
  payload: pickUplocation
});

export const setDropOffLocation = dropOffLocation => ({
  type: 'SET_DROP_OFF_LOCATION',
  payload: dropOffLocation
});

export const setPickUpDate = pickUpDate => ({
  type: 'SET_PICK_UP_DATE',
  payload: pickUpDate
});

export const setDropOffDate = dropOffDate => ({
  type: 'SET_DROP_OFF_DATE',
  payload: dropOffDate
});

export const searchForCars = (tripType, pickUplocation, dropOffLocation, pickUpDate, dropOffDate) => {
  console.log('tripType', tripType);
  console.log('pickUplocation', pickUplocation);
  console.log('dropOffLocation', dropOffLocation);
  console.log('pickUpDate', pickUpDate);
  console.log('dropOffDate', dropOffDate);
}
  // dispatch => fetch}
