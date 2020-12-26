import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import store from 'js/store.js';
import { Provider } from 'react-redux';
import FrontPage from 'views/FrontPage/FrontPage';
import ChatView from 'views/ChatView/ChatView';

import 'assets/scss/material-kit-react.scss';

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/chat" component={ChatView} />
        <Route path="/" component={FrontPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Note for future developer, Switch short-circuits
// the path match, meaning if we put / in front of /chat
// all path will be directed to /
