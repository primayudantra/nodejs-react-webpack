import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import MenuList from './modules/MenuListContent'
import ProfileContent from './modules/ProfileContent'
import ContactContent from './modules/ContactContent'

class App extends Component {
  render(){
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={MenuList}/>
          <Route path="/profile" component={ProfileContent}/>
          <Route path="/contact" component={ContactContent}/>
        </Router>
        <h2>ReactJS Example</h2>
        <h2>NodeJS | ReactJS | React-Router | Webpack</h2>
      </div>
    )
  }
}

export default App
