import React from 'react'
// var React = require('react');

import { render } from 'react-dom'
// var render = require('react-dom').render;

import App from '../components/App'
// var App = require('../components/App')

render(
  // define the encompassing components,
  // DOM Element we want to mount it to

  <App/>,
  document.getElementById('app')
)
