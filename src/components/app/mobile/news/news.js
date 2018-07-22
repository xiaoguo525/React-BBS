import React, { Component } from 'react';
import './news.css';
import {Icon} from 'antd';
export default class News extends Component{
	constructor(){
		super();
		// var data=[
		// {src:require('./images/1.jpg'),name:'死循环',title:'程序员的流派之争',
		// content:'前几天在知乎上看到一个问题，就是：程序员有流派吗？没想到自己在知乎上随便一回答，竟然引起了大家的强烈反应和积极留言反馈。我的回答如下：我感觉程序员最大的两个流派就是如下:一、左派大括号写在左边的。main {}',
		// label:'吐槽.人生.随便问',time:'9小时',hot:42,comments:0},
		// {src:require('./images/2.jpg'),name:'老铁没毛病',title:'现在大学软件专业都要学什么专业课？',
		// content:'高考结束了，一个表姑的儿子今年刚高考完，现在准备报考软件专业，所以在那问我现在大学软件专业都要学些什么课程，哪个大学的软件专业比较好之类的问题，讲真，我虽然坐着软件开发的工作，但我本身大学并不是学的软件专业，所以对软件专业的课程并不是很了解，有童靴是学软件相关专业的吗？你们在大学都主要要学哪些专业课？',
		// label:'吐槽.人生.随便问',time:'9小时',hot:11,comments:1},
		// {src:require('./images/3.jpg'),name:'林永贵',title:'使用masonry插件做瀑布流效果div出现叠层的问题',
		// content:'最近在使用masonry插件做网页的瀑布流排列效果，当一次加载的图片比较多时会出现div叠在一起的问题，这种问题有谁遇到过吗？该怎么解决？加载图片比较少时，基本正常,效果如下：但是，当加载的图片比较多时，div就叠在一起了，效果如下：',
		// label:'jQuery部落',time:'1天',hot:27,comments:1},
		// {src:require('./images/4.jpg'),name:'董闵行',title:'A站被黑？一场自导自演的裸戏营销！',
		// content:'6月13日一则《关于AcFun受黑客攻击致用户数据外泄的公告》引爆互联网。它赤裸裸的昭告全世界：不好意思兄弟姐妹们，我们网站被黑客盯上了，几千万的用户数据被黑客窃取了，如果您是在2017年7月7日之后一直未登录过AcFun，密码加密强度不是最高级别，账号存在一定的安全风险，恳请尽快修改密码。这',
		// label:'互联网潮前线',time:'1天',hot:53,comments:0},
		// {src:require('./images/5.jpg'),name:'Kindle',title:'面试',
		// content:'面的是Java岗，总共面了7家公司，通过了6家。按自己的信心提升度我把面试过程分为上半场和下半场。上半场曹操专车这是吉利集团下属子公司，已经是一家独角兽。一面中规中矩，没啥特别的。二面好像是个主管，隔了好几天，基本没问技术问题，反而是问职业规划，对加班有啥看法，有点措手不及，感觉回答的不好。但是过几天还是收到HR的现场面试通知。现场是技术面加HR',
		// label:'职场.招聘',time:'1天',hot:76,comments:0},
		// {src:require('./images/6.jpg'),name:'见证奇迹',title:'重温Python 经典设计格言',
		// content:'美丽优于丑陋。 清楚优于含糊。 简单优于复杂。 复杂优于繁琐。 平坦优于曲折。 宽松优于密集。 重要的是可读性。 特殊的案例不足以特殊到破坏规则。 尽管实践可以打破真理。 错误却不可置之不理。 除非另有明确要求。 面对模棱两可，拒绝猜测。 总会有一个 —— 最好是只有一个 —— 显而易见的方式来明辨。',
		// label:'Python公社',time:'1天',hot:52,comments:0},
		// {src:require('./images/7.jpg'),name:'张琳',title:'传言魅族将裁员约2000人，这是失业潮要来了吗？',
		// content:'近日有传言魅族将启动年中裁员，涉及人员估计在2000人左右。其中约有1500名的合同工，另外约有600人左右的第三方劳务派遣工。关于魅族为什么会裁员，在其总裁致同事的公开信中是这样说的：组织精简和人员优化将帮助公司降低运营成本，实现盈利目标。如果公司的运营效率得到提升，我们有充分的能力实现盈利。但是，盈利并非魅族的目标。魅族的使命是为消费者提供不随波逐流，有工匠精神的科技产品。如果不',
		// label:'互联网潮前线',time:'1天',hot:41,comments:0},
		// ]
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
                                <img src={items.icon}  alt='' />
                            </li>
                        </ul>
                        <ul className="blog-info">
                            <li className="font-auther"><a href="http://www.dalbll.com/user/space/1569" target="_blank" rel="noopener noreferrer">
                                {items.name}</a></li>
                            <li className="font-title"><a href="http://www.dalbll.com/Group/Topic/Teasing/5228" target="_blank" rel="noopener noreferrer">
                                {items.title} </a></li>
                            <li className="font-preview">{items.msg}
                            </li>
                            <li className="font-stat">
                                <dl>
                                    <span className="kind">{items.tag} </span>
                                </dl>
                                <dl>
                                    <Icon type="down-circle-o" /> {items.time}
                                </dl>
                                <dl>
                                   <Icon type="bulb" /> {items.hot} 
                                </dl>
                                <dl>
                                    <Icon type="message" /> {items.command}
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
  		fetch('http://pak6pecxz.bkt.clouddn.com/index1.json')
  		.then((responsive)=>{
  			return responsive.json()
  		}).then((res)=>{
  			this.setState({
  				data:res
  			})
  		})
  	}
}

