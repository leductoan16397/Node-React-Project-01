import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, Router, BrowserRouter } from 'react-router-dom';
const createHistory = require('history').createBrowserHistory;

ReactDOM.render(
  <BrowserRouter>
    <Router history={createHistory()}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
