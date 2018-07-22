import React, { Component } from 'react';
import './header.css';
import {Row,Col,Button} from 'antd';
import { Input,Icon} from 'antd';
import {Link } from 'react-router-dom'
const Search = Input.Search;
export default class Header extends Component {
	constructor(){
		super();
		this.state={
			val:''
		}
	}
  render() {
  	var val=this.state.val;
  	var path='/search/'+val;
    return (
      <div className="header">
      		<Row className='header-row'>
      			<Col  span={16}>
      				<div className=''>
		      			<Input 
                className='header-input'
		      			onChange={this.change.bind(this)}
		      			placeholder="请输入关键字" />
		      			<Link className='header-tag'  to={path}><Icon type="search" /> 搜索</Link>
					    </div>
      			</Col>
      			<Col  span={8}>
      				<div className='header-button'>
		      			 <Button type="primary" className='header-btn' icon="question-circle-o">我要提问</Button>
		      			 <Button type="primary" className='header-btn' icon="edit">随便写写</Button>
		      			 <Button type="primary" className='header-btn' icon="book">我要写书</Button>
	      			</div>
	      		</Col>
      		</Row>
      </div>
    );
  }
  change(e){
  	var val=e.nativeEvent.target.value;
  	this.setState({
  		val:val
  	})
  }
}

