import React, { Component } from 'react'
import ajax from 'superagent'
import {Table, Column, Cell} from 'fixed-data-table';

import TableTest from './TableTestContent'

class TestContent extends Component{

  constructor(props){
    super(props);
  }
  ajaxCalling() {
    ajax.get('https://api.github.com/repos/facebook/react/commits')
        .end((error, response) => {
            if (!error && response) {
                this.setState({ commits: response.body });
            } else {
                console.log('There was an error fetching from GitHub', error);
            }
        }
    );
  }

  render(){
    return (
      <div>
        <div className='container'>
          <TableTest/>
        </div>
      </div>
    )
  }
}

export default TestContent
