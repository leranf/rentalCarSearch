import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Search from './components/Search';
import NotFound from './components/NotFound';

const getRoutes = (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="*" component={NotFound}/>
    </Route>
  );
}

export default getRoutes;