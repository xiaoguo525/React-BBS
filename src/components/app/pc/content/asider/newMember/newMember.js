import React, { Component } from 'react';
import './newMember.css';
import {Icon} from 'antd'

export default class NewMember extends Component {
	constructor(){
		super();
	  	var data=[
		  	{src:require('./images/1.jpg'),name:'小成'},
		  	{src:require('./images/2.jpg'),name:'伍悦匿匿'},
		  	{src:require('./images/1.jpg'),name:'linameko'},
		  	{src:require('./images/1.jpg'),name:'Alois'},
		  	{src:require('./images/1.jpg'),name:'Summer'},
		  	{src:require('./images/3.jpg'),name:'Oats'},
		  	{src:require('./images/1.jpg'),name:'静坐仰望'},
		  	{src:require('./images/1.jpg'),name:'yakir'},
		  	{src:require('./images/4.jpg'),name:'GEORGIA'},
		  	{src:require('./images/1.jpg'),name:'default'},
	  	]
	  	this.state={
	  		data:data
	  	}
	}
  render() {
  	var content=this.state.data.map((items,index)=>{
			return (
					<div key={index} className="fans-item">
                        <ul>
                            <li ><a rel="noopener noreferrer" href="http://www.dalbll.com/user/space/1826" target="_blank">
                                <img src={items.src} className="layui-circle" alt='' /></a> </li>
                            <li className="fans-li1"><a rel="noopener noreferrer" href="http://www.dalbll.com/user/space/1826" target="_blank">{items.name}</a></li>
                        </ul>
                    </div>
                	)
		})
    return (
      <div className="newMember">
          	<h3 className="title">
      			<Icon className='icon' type="logout" />
            	最新加入的成员
  			</h3>
  			<div className="newMember-wrap">
            	{content}
  			</div>
      </div>
    );
  }
}

