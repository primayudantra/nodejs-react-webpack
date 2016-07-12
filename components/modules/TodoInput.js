import React, { Component } from 'react'
import { main } from '../styles/style.css'
import TodoDisplay from './TodoDisplay'

class TodoInput extends Component{

  constructor(props, context){
    super(props, context)
      this.state = {
        inputText: 'Prima'
      }
    }


  deleteLetter(){
    this.setState({
      inputText:this.state.inputText.substring(0, this.state.inputText.length - 1)
    })
  }

  handleChange(event){
    this.setState({
      inputText: event.target.value
    })
  }

  handleClick() {
    this.props.deleteLetter()
  }

  render(){
    return(
      <div>
        <div className='container'>
          <h1>This is Todo Input</h1>
          <input type='text'
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <TodoDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>
    )
  }
}

export default TodoInput
