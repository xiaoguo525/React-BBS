import React, { Component } from 'react';
import './books.css';
import {Icon} from 'antd';
export default class Books extends Component {
	constructor(){
		super();
	  	var data=[
		  	{src:require('./images/1.jpg'),srcSmall:require('./images/s1.jpg'),title:'MongoDB开发进阶教程',member:11,hot:1580,discuss:0},
		  	{src:require('./images/2.jpg'),srcSmall:require('./images/s2.jpg'),title:'支撑海量数据的数据库分库分表架构指南',member:14,hot:249,discuss:1},
		  	{src:require('./images/3.jpg'),srcSmall:require('./images/s3.jpg'),title:'深入理解Android开发中的Binder原理',member:8,hot:173,discuss:0},
		  	{src:require('./images/4.jpg'),srcSmall:require('./images/s4.jpg'),title:'Python从入门到精通',member:18,hot:172,discuss:0},
		  	{src:require('./images/5.jpg'),srcSmall:require('./images/s5.jpg'),title:'Memcached入门教程',member:19,hot:177,discuss:1},
		  	{src:require('./images/6.jpg'),srcSmall:require('./images/s6.jpg'),title:'MongoDB高级开发教程',member:22,hot:167,discuss:0},
		  	{src:require('./images/7.jpg'),srcSmall:require('./images/s7.jpg'),title:'Redis基础教程',member:17,hot:171,discuss:0},
		  	{src:require('./images/8.jpg'),srcSmall:require('./images/s8.jpg'),title:'ASP.NET编程指南',member:24,hot:177,discuss:1},
		  	{src:require('./images/9.jpg'),srcSmall:require('./images/s9.jpg'),title:'Java从入门到精通',member:20,hot:165,discuss:0},
		  	{src:require('./images/10.jpg'),srcSmall:require('./images/s10.jpg'),title:'70后老程序猿的心历路程',member:20,hot:197,discuss:3},
		  	{src:require('./images/11.jpg'),srcSmall:require('./images/s11.jpg'),title:'Android 开发基础教程',member:8,hot:158,discuss:0},
		  	{src:require('./images/12.jpg'),srcSmall:require('./images/s12.jpg'),title:'21天精通Ruby开发',member:9,hot:159,discuss:0},
		  	{src:require('./images/13.jpg'),srcSmall:require('./images/s13.jpg'),title:'jQuery基础教程',member:22,hot:293,discuss:0},
		  	{src:require('./images/14.jpg'),srcSmall:require('./images/s14.jpg'),title:'从零开始学MongoDB',member:13,hot:171,discuss:0},
		  	{src:require('./images/15.jpg'),srcSmall:require('./images/s15.jpg'),title:'Bootstrap学习教程',member:20,hot:196,discuss:1},
		  	
	  	]
	  	this.state={
	  		data:data
	  	}
	}
    render() {
    	var content=this.state.data.map((items,index)=>{
    		return (
    				<div key={index} className="article-item">
                        <ul>
                            <li className="atl-li1"><a href="http://www.dalbll.com/Book/Category/19" target="_blank" rel="noopener noreferrer">
                                <img src={items.src} alt='' /></a> </li>
                            <li className="atl-li2">
                                <div className="auther-box">
                                    <a href="http://www.dalbll.com/user/space/1705" target="_blank" rel="noopener noreferrer">
                                        <img src={items.srcSmall} className="layui-circle" alt='' /></a>
                                </div>
                            </li>
                            <li className="atl-li3"><a href="http://www.dalbll.com/Book/Category/19" target="_blank" rel="noopener noreferrer">
                                {items.title}</a></li>
                            <li className="atl-li4">
                                <dl>
                                   <Icon type="user" /> &nbsp;{items.member}
                                </dl>
                                <dl>
                                   <Icon type="dashboard" />&nbsp;{items.hot} 热度
                                </dl>
                                <dl>
                                   <Icon type="message" /> &nbsp;{items.discuss}
                                    讨论
                                </dl>
                            </li>
                        </ul>
                    </div>
    				)
    	})
	    return (
	      <div className="books">
	          {content}
	      </div>
	    );
    }
}

