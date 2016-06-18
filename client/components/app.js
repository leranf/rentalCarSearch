class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: null,
      pickUpLocation: null,
      dropOffLocation: null,
      pickUpDate: null,
      dropOffDate: null,
      cars: []
    };
  }

  setTrip(tripType) {
    this.setState({direction: tripType});
  }

  render() {
    return (
      <div>
        <Direction setTripType={this.setTrip.bind(this)}/>
      </div>
    );
  }
}

const Direction = ({setTripType}) => ( 
  <div>
    <label for='carRoundTrip'>
      <input class='roundtrip' type='checkbox' onClick={() => setTripType('roundtrip')}/>
      <span>Roundtrip</span>
    </label>
    <label for='carOneWay'>
      <input class='oneway' type='checkbox' onClick={() => setTripType('oneway')}/>
      <span>One way</span>
    </label>
  </div>
);

const PickUpLocation = () => {
  <div>Hello</div>
}

const DropOffLocation = () => {
  <div>Hello</div>
}

const PickUpDate = () => ( 
  <div>Hello</div>
);

const DropOffDate = () => ( 
  <div>Hello</div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);