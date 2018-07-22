import React, { Component } from 'react';
import './groups.css';
import { Icon,Row,Col } from 'antd';
import slideRightImg  from './images/slide-right.png'
export default class Groups extends Component {
	constructor(){
		super();
	  	var data=[
		  	{src:require('./images/1.jpg'),title:'吐槽.人生.随便问',member:179,topic:81},
		  	{src:require('./images/2.jpg'),title:'互联网潮前线',member:172,topic:39},
		  	{src:require('./images/3.jpg'),title:'C#(.NET)社区',member:118,topic:553},
		  	{src:require('./images/4.jpg'),title:'职场.招聘',member:108,topic:63},
		  	{src:require('./images/5.jpg'),title:'架构师部落',member:221,topic:108},
		  	{src:require('./images/6.jpg'),title:'Html5开发联盟',member:55,topic:33},
		  	{src:require('./images/7.jpg'),title:'Bootstrap社区',member:320,topic:240},
		  	{src:require('./images/8.jpg'),title:'Html/CSS相关',member:86,topic:87}
	  	]
	  	this.state={
	  		data:data
	  	}
	}
	render() {
  		var content=this.state.data.map((items,index)=>{
  		return (<div key={index} className='group-wrap'>
  					<div className='group-left'>
  						<img className='groups-Img' src={items.src} alt='' />
					</div>
					<div className='group-right'>
						<p className='g-title'>{items.title}</p>
							<div className='group-topic'>
							<span className='member'>{items.member} 成员</span>
							<span className='topic'>{items.topic} 话题</span>
						</div>
						<a className='attention'>+加关注</a>
					</div>
  				</div>)
  		})
   		return (
	      	<div className="groups">
	      		<div className="groups-title">
		      		<Icon className="groups-icon" type="profile"/>
		            可能感兴趣的群组
	      		</div>
	      		<Row className='groups-wrap'>
	      			<Col  span={22}>
	      				<div className='groups-main'>{content}</div>
	      			</Col>
	      			<Col  span={2}>
	      				<div className='groups-icon'>
	      					<img className='slideRightImg' src={slideRightImg} alt='' />
	      				</div>
		      		</Col>
	      		</Row>
	      </div>
	    );
  	}
}

