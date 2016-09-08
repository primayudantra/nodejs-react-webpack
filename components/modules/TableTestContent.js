import React, { Component } from 'react'
import TableTestContentItem from './TableTestContentItem'

const TableTest = () => {

    return(
      <div>
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <TableTestContentItem/>
          </tbody>
        </table>
      </div>
    )
};


export default TableTest
