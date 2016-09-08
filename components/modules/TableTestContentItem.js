import React, { Component } from 'react'
import ajax from 'superagent'

class TableTestContentItem extends Component{
  render(){
    return(
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      )
    };
  }


export default TableTestContentItem
