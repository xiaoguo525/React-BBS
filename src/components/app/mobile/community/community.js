import React, { Component } from 'react';
import './community.css';
import {Row,Col,Icon} from 'antd';

export default class Community extends Component {
	constructor(){
		super();
	  	var data=[
		  	{src:require('./images/IOS.jpg'),title:'iOS开发部落',member:15,blog:23,question:0},
		  	{src:require('./images/Node.jpg'),title:'Node.js中文网',member:16,blog:0,question:0},
		  	{src:require('./images/Ruby.jpg'),title:'Ruby社区',member:18,blog:1,question:0},
		  	{src:require('./images/Vue.jpg'),title:'Vue.js中文社区',member:18,blog:1,question:4},
	  	]
	  	this.state={
	  		data:data
	  	}
	}
  	render() {
  		var content=this.state.data.map((items,index)=>{
  			return (<div key={index} className='wrap'>
  						<Row>
			      			<Col span={6}>
				      			<a className='community-logo' href="/Group/Category/IOS">
                                    <img src={items.src} alt='' />
                                </a>
			      			</Col>
			      			<Col span={18}>
				      			<ul className="my-group-info">
	                                <li className="g-i-1">
	                                	<a className='data-title' href="/Group/Category/IOS">
	                                    	{items.title}
	                                    </a>
	                                </li>
	                                <li className="g-i-2">
	                                    <dd>
	                                        <dl>
	                                            {items.member}
	                                        </dl>
	                                        <dl className="c-gray">
	                                            位成员
                                            </dl>
	                                    </dd>
	                                    <dd>
	                                        <dl>
	                                            {items.blog}
	                                        </dl>
	                                        <dl className="c-gray">
	                                            篇博客</dl>
	                                    </dd>
	                                    <dd>
	                                        <dl>
	                                            {items.question}
	                                        </dl>
	                                        <dl className="c-gray">
	                                            个提问</dl>
	                                    </dd>
	                                </li>
	                                <li className="g-i-3">
	                                    <dd>
	                                        <a href="/Group/Add/Blog/IOS"><span className="btn-orange-small">
	                                        +<Icon type="edit" />
	                                            写博客</span></a>
	                                    </dd>
	                                    <dd>
	                                        <a href="/Group/Add/Question/IOS"><span className="btn-blue-small">
	                                        +<Icon type="user" />
	                                            提问题</span></a>
	                                    </dd>
	                                </li>
                            	</ul>
				      		</Col>
			      		</Row>
  					</div>)
  		})
	    return (
	      <div className="community">
	      		<h3 className="community-title">
	      			<Icon className="icon" type="calendar"/>
	            	这些社区很有意思
      			</h3>
      			<div className="community-wrap">
	            	{content}
      			</div>
	      </div>
	    );
 	}
}

