import React, { Component } from 'react'

import { main } from '../styles/style.css'

class TodoDisplay extends Component{
  handleClick() {
    this.props.deleteLetter()
  }
  render(){
    return(
      <div>
        <div className='container'>
        <p>Hello, {this.props.text}</p>
          <button onClick={this.handleClick.bind(this)}>Delete one letter</button>
        </div>
      </div>
    )
  }
}

export default TodoDisplay
