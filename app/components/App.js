import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Footer/>
      </div>
    );
  }
}

export default App;
