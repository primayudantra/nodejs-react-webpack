import React, { Component } from 'react'
import { main } from '../styles/style.css'

// let Button = Bootstrap.Button;

class GeneralContent extends Component{
  render(){
    return(
      <div>
        <div className='container'>
          <h1>This is General Content</h1>
          <p className='main'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

export default GeneralContent
