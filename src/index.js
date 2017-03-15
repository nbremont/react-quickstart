import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Detail from './Detail';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='detail' component={Detail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
