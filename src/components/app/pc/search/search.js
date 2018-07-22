import React, { Component } from 'react';
import Header from '../content/header/header.js';
import Nav from '../nav/nav.js';
import SearchRes from './searchres.js';
export default class Search extends Component {
  render() {
    return (<div>
				<Nav />
				<Header />
				<SearchRes keys={this.props.match.params.keys} />
			</div>)
  }
}

