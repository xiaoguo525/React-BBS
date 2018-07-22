import React, { Component } from 'react';
import './news.css';
import {Icon} from 'antd';
export default class News extends Component{
  	constructor(){
  		super();
  		this.state={
  			data:[]
  		}
  	}
  	render() {
  		var content=this.state.data.map((items,index)=>{
  			return (
  					<div key={index} className="blog-item">
                <ul className="blog-author">
                    <li>
                        <img src={items.icon}  />
                    </li>
                </ul>
                <ul className="blog-info">
                    <li className="font-auther"><a href="http://www.dalbll.com/user/space/1569" target="_blank" rel="noopener noreferrer">
                        {items.name}</a>
                    </li>
                    <li className="font-title"><a href="http://www.dalbll.com/Group/Topic/Teasing/5228" target="_blank" rel="noopener noreferrer">
                        {items.title} </a>
                    </li>
                    <li className="font-preview">{items.msg}
                    </li>
                    <li className="font-stat">
                        <dl>
                            <span className="kind">{items.tag} </span>
                        </dl>
                        <dl>
                            <Icon type="down-circle-o" /> {items.time}前
                        </dl>
                        <dl>
                           <Icon type="bulb" /> {items.hot} 热度
                        </dl>
                        <dl>
                            <Icon type="message" /> {items.command} 评论
                        </dl>
                    </li>
                </ul>
            </div>
  			)
  		})
	    return (
	      <div className="news">
	          {content}
	      </div>
	    );
  	}
  	componentDidMount(){
  		this.getData();
  	}
  	getData(){
  		fetch('http://pbfwbdhuu.bkt.clouddn.com/news.json')
  		.then((responsive)=>{
  			return responsive.json()
  		}).then((res)=>{
  			this.setState({
  				data:res
  			})
  		})
  	}
}

