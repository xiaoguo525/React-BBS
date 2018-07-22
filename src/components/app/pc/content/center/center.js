import React, { Component } from 'react';
import './center.css';
import Groups from './groups/groups.js';
import Main from './main/main.js';


export default class Center extends Component {
  render() {
    return (
      <div className="center">
          <Groups />
          <Main />
      </div>
    )
  }
}

