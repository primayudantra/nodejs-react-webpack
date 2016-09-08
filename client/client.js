import React from 'react'
// var React = require('react');
import ReactDOM from 'react-dom'
// var render = require('react-dom').render;

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '../components/App'

import GeneralContent from '../components/modules/GeneralContent'
import ProfileContent from '../components/modules/ProfileContent'
import ContactContent from '../components/modules/ContactContent'
import TodoInputContent from '../components/modules/TodoInput'
import TestContent from '../components/modules/TestContent'

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GeneralContent}/>
      <Route path="/profile" component={ProfileContent}/>
      <Route path="/contact" component={ContactContent}/>
      <Route path="/todo" component={TodoInputContent}/>
      <Route path="/test" component={TestContent}/>
    </Route>
  </Router>,
app);
