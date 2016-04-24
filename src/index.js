import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Profile from './components/Profile';

const root = document.querySelector('.root');

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/profile/:username' component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
), root);
