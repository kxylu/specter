import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'js/store.js';
import { Provider } from 'react-redux';
import WorkingInProgress from 'views/WorkingInProgress/WorkingInProgress';
import ChatView from 'views/ChatView/ChatView';

import 'assets/scss/frontend.scss';

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <Switch>
        <Route path="/chat" component={ChatView} />
        <Route path="/" component={WorkingInProgress} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// Note for future developer, Switch short-circuits
// the path match, meaning if we put / in front of /chat
// all path will be directed to /
