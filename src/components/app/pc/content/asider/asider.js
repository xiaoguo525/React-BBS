import React, { Component } from 'react';
import './asider.css';
import Community from './community/community.js';
import InterestBooks from './interestBooks/interestBooks.js';
import InterestPeople from './interestPeople/interestPeople.js';
import NewMember from './newMember/newMember.js';
import {Icon} from 'antd'


export default class ASider extends Component {
  render() {
    return (
      <div className="asider">
          <Community />
          <InterestBooks />
          <InterestPeople />
          <NewMember />
          <div className="right-common-box">
                <div className="title-box">
                    <Icon className="icon" type="share-alt" />友情链接
                </div>
                <div>
                  <ul>
                      <li className="link-li">
                        <a href="http://www.hello-code.com" target="_blank"  rel="noopener noreferrer">
                        编程网站</a>
                      </li>
                      <li className="link-li">
                        <a href="http://www.bootcss.com" target="_blank" rel="noopener noreferrer">
                        Bootstrap中文网</a>
                      </li>
                  </ul>
                </div>
          </div>
      </div>
    );
  }
}

