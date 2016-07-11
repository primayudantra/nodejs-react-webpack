import React, { Component } from 'react'
import { Link } from 'react-router'
import { main } from '../styles/style.css'

class MenuList extends Component {
  render(){
    return(
      <div>
        <ul role="nav" className="main">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default MenuList
