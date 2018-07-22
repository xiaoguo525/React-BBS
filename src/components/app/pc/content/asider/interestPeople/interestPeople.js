import React, { Component } from 'react';
import './interestPeople.css';
import {Icon} from 'antd'

export default class InterestPeople extends Component {
	constructor(){
		super();
	  	var data=[
		  	{src:require('./images/1.jpg'),name:'毛佩琪',fans:27,attention:0,label:'Python工程师'},
		  	{src:require('./images/2.jpg'),name:'明朝那些事',fans:21,attention:15,label:'JAVA工程师'},
		  	{src:require('./images/3.jpg'),name:'李白羽',fans:19,attention:7,label:'PHP工程师'},
		  	{src:require('./images/4.jpg'),name:'范蓉蓉',fans:17,attention:1,label:'UI设计师'},
		  	{src:require('./images/5.jpg'),name:'巴克利',fans:19,attention:21,label:'.NET工程师'},
		  	{src:require('./images/6.jpg'),name:'朱莎莎',fans:17,attention:7,label:'游戏策划'},
		  	{src:require('./images/7.jpg'),name:'不二神话',fans:16,attention:8,label:'项目经理'},
		  	{src:require('./images/8.jpg'),name:'魔域之火',fans:9,attention:1,label:'UI设计师'}
	  	]
	  	this.state={
	  		data:data
	  	}
	}
  	render() {
  		var content=this.state.data.map((items,index)=>{
			return (
					<div key={index} className="friend-item">
                        <ul className="friend-ul1">
                            <li ><a rel="noopener noreferrer" href="http://www.dalbll.com/user/space/1520" target="_blank">
                                <img src={items.src} className="layui-circle" alt='' /></a> </li>
                        </ul>
                        <ul className="friend-ul2">
                            <li className="f-li1"><a  rel="noopener noreferrer" href="http://www.dalbll.com/user/space/1520" target="_blank">
                                {items.name}</a></li>
                            <li className="f-li2">{items.fans}
                                粉丝 | {items.attention}
                                关注 </li>
                            <li className="f-li3">
                                    <span className="tag">{items.label}</span>         
                            </li>
                            <li><a rel="noopener noreferrer" href=""><span className="focusUser" id="1520">+加关注</span></a></li>
                        </ul>
                    </div>
                	)
		})
	    return (
	      <div className="interestPeople">
	          	<h3 className="title">
	      			<Icon className="icon" type="calendar"/>
	            	可能感兴趣的人
      			</h3>
      			<div className="interestPeople-wrap">
	            	{content}
      			</div>
	      </div>
	    );
  	}
}

