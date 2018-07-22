import React, { Component } from 'react';
import Nav from './nav/nav.js';
import Content from './content/content.js';


export default class PC extends Component {
  render() {
    return (<div>
				<Nav />
				<Content />
			</div>)
  }
}

