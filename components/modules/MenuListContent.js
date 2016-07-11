import React, { Component } from 'react'
import { Link } from 'react-router'
import { Navbar, Item, NavbarHeader, NavbarItems } from 'react-bootstrap'
import { main } from '../styles/style.css'

class MenuList extends Component {
  render(){
    return(
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default MenuList
