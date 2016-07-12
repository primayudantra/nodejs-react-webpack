import React, { Component } from 'react'
import { Link } from 'react-router'
import ContactContent from './modules/ContactContent'

class App extends Component {
  render(){
    return (
      <div>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="profile">Profile</Link></li>
              <li><Link to="contact">Contact</Link></li>
              <li><Link to="todo">To-do</Link></li>
            </ul>
            </div>
          </nav>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
