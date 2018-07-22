import React, { Component } from 'react';
import './interestBooks.css';
import {Icon} from 'antd'

export default class InterestBooks extends Component {
	constructor(){
		super();
	  	var data=[
		  	{src:require('./images/1.jpg'),srcSmall:require('./images/s1.jpg'),title:'21天精通Ruby开发'},
		  	{src:require('./images/2.jpg'),srcSmall:require('./images/s2.jpg'),title:'Android 开发基础教程'},
		  	{src:require('./images/3.jpg'),srcSmall:require('./images/s3.jpg'),title:'Java从入门到精通'},
		  	{src:require('./images/4.jpg'),srcSmall:require('./images/s4.jpg'),title:'MongoDB高级开发教程'},
		  	{src:require('./images/5.jpg'),srcSmall:require('./images/s5.jpg'),title:'深入理解Android开发中的Binder原理'},
		  	{src:require('./images/6.jpg'),srcSmall:require('./images/s6.jpg'),title:'Python从入门到精通'},
	  	]
	  	this.state={
	  		data:data
	  	}
	}
  	render() {
		var content=this.state.data.map((items,index)=>{
			return (<div key={index} className="my-book-item">
	                    <ul>
	                        <li className="book-li1"><a href="http://www.dalbll.com/Book/Category/4" target="_blank" rel="noopener noreferrer">
	                            <img src={items.src} alt='' /></a> </li>
	                        <li className="book-li2">
	                            <div className="auther-box">
	                                <a href="http://www.dalbll.com/user/space/1660" target="_blank" rel="noopener noreferrer">
	                                    <img src={items.srcSmall} className="layui-circle" alt='' /></a>
	                            </div>
	                        </li>
	                        <li className="book-li3"><a href="http://www.dalbll.com/Book/Category/4" target="_blank" rel="noopener noreferrer">{items.title}</a></li>
	                        <li className="book-li4"><a href="http://www.dalbll.com/Book/Category/4" target="_blank" rel="noopener noreferrer"><span className="btn-yellow-small">
	                            开始阅读</span> </a></li>
	                    </ul>
                	</div>)
		})
	    return (
	      <div className="interestBooks">
	          <h3 className="title">
	      			<Icon className="icon" type="calendar"/>
	            	你可能感兴趣的书籍
      			</h3>
      			<div className="interestBooks-wrap">
	            	{content}
      			</div>
	      </div>
	    );
  }
}

