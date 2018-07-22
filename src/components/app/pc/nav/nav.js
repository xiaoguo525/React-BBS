import React, { Component } from 'react';
import './nav.css';
import smalllog  from './images/smalllog.jpg'
import wdl  from './images/wdl.jpg'
import {Icon} from 'antd'

export default class Nav extends Component {
  render() {
    return (
      <div  className="nav">
          <div className="nav-center">
          		<div className="nav-logo">
          			   <a href="http://www.dalbll.com">
                    	<img src={smalllog} alt='' />
                   </a>
          		</div>
          		<div  className="user">
          			<img src={wdl} alt='' />
          			<p>未登录用户</p>
          		</div>
          		<div className="first-page">
          			<p>
	          			<a href="http://www.dalbll.com">
	          				<Icon type="home" /> 首 页
	          			</a>
          			</p>
	          		<p>
	          			<a href="">
	          				<Icon type="profile" /> 书 架
	          			</a>
          			</p>
          		</div>
          		<div className="login">
          			<p>
	          			<a href=""> 
                            登录系统</a>
          			</p>
	          		<p>
	          			<a  href="">
                            注册账号</a>
          			</p>
          		</div>
          	</div>
	  		<div className="copyright">
  	  			<p>联系我们</p>
  	  			<p>dalbll.com 版权声明</p>
  	  			<p>闽ICP备0000000号-1</p>
	  		</div>
      </div>
    );
  }
  
}

