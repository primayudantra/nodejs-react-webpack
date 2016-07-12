import React from 'react'
// var React = require('react');
import ReactDOM from 'react-dom'
// var render = require('react-dom').render;

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from '../components/App'

import GeneralContent from '../components/modules/GeneralContent'
import ProfileContent from '../components/modules/ProfileContent'
import ContactContent from '../components/modules/ContactContent'
// var App = require('../components/App')


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GeneralContent}/>
      <Route path="/profile" component={ProfileContent}/>
      <Route path="/contact" component={ContactContent}/>
    </Route>
  </Router>,
app);
