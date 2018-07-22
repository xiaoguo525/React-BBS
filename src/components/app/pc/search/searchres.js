import React, { Component } from 'react';
import './searchres.css';
import News from '../content/center/main/news/news.js'
export default class SearchRes extends Component {
  render() {
  	var keys=this.props.keys;
    return (<div className='res'>
				<News />
			</div>)
  }
  constructor(){
  	super();
  	this.state={
  		urls:[
  			'http://pak6pecxz.bkt.clouddn.com/search1.json',
  			'http://pak6pecxz.bkt.clouddn.com/search2.json',
  			'http://pak6pecxz.bkt.clouddn.com/search3.json',
  			'http://pak6pecxz.bkt.clouddn.com/search4.json',
  		]
  	}
  }
}

