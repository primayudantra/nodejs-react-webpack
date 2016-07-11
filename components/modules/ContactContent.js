import React, { Component } from 'react'
import MenuList from './MenuListContent'

import { Button } from 'react-bootstrap'

import { main } from '../styles/style.css'

// let Button = Bootstrap.Button;

class ContactContent extends Component{
  render(){
    return(
      <div className='container'>
        <MenuList/>
        <h1>This is Contact</h1>
        <p className='main'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Submit</Button>
      </div>
    )
  }
}

export default ContactContent
