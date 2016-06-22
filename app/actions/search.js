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

export const searchForCars = (location, date, time) => 
  dispatch => fetch('/api/searchHotwire', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        location: location.pickUp,
        startDate: date.pickUp,
        endDate: date.dropOff,
        pickUpTime: time.pickUp,
        dropOffTime: time.dropOff
      })
    })
    .then(res => {
      if (res.ok) {
        res.json().then(carResults => {
          console.log('carResults', carResults);
        });
      } else {
        res.json().then(badResults => {
          console.log('error');
        });
      }
    });

    // $.ajax({
    //   url: 'http://api.hotwire.com/v1/search/car?apikey=pt9hmnp4ngx64vaqtck2hxn3',
    //   data: {
    //     dest: 'LAX',
    //     startdate: '06/22/2016',
    //     enddate: '06/23/2016',
    //     pickuptime: '06:00',
    //     dropofftime: '06:00',
    //   },
    //   method: 'GET',
    //   success: function(data) {
    //     console.log('data', data);
    //   },
    //   error: function(err) {
    //     console.log('err', err);
    //   },
    //   dataType: 'jsonp'
    // });

