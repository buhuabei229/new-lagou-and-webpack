import React, {Component} from 'react';
import fetch from  'isomorphic-fetch';
import { NavLink } from 'react-router-dom';
import Gaojiejiazai from '../../gaojie/gaojie.js';
class Job extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: '',
            list: [],
            len: 20, // 默认的一页的长度
            newlen:0,// 点击加载更多更新的新的要截取数组的结束下标
            text: '加载更多',
            flag: 'block'
        }
    }
    componentDidMount(){
        const lagoulocal =  window.localStorage.getItem('lagouwang');
        this.setState({loginStatus: lagoulocal ? true : false});
        this.setState({newlen: this.state.len});
        if(this.state.list.length < this.state.newlen){
            this.setState({flag: 'none'});
         } else {
            this.setState({flag: 'block'});
         }
        fetch('/list/data').then((req, res) => {
           return  req.json() ;
        }) .then((data) => {
               this.setState({
                   src: data.src,
                   list:data.result
               });
        });
    }
    render (){
        const newlist = this.state.list.length > 0? this.state.list.slice(0, this.state.newlen): [];
        return (
            <div className="hello_job" ref={(ref) => this.hellojob = ref}>
                 {
                    this.state.loginStatus ? null : <div className="hello_login">
                        <span>10秒钟定制职位</span>
                        <button><NavLink to="/login">去登录</NavLink></button>
                    </div>
                 }
                 
                 {
                     newlist.map((ele, index) => {
                         return (
                                <div className="hello_dl" key={index}>
                                        <NavLink  to={{
                                            pathname: `/jobpages1/${ele.city}`,
                                            state: ele
                                        }}>
                                        <dl>
                                        <dt><img  src={ this.state.src + ele.companyLogo} alt="images"/></dt>
                                        <dd>
                                            <div className="hello_dl_left">
                                                    <h4>{ele.companyName}</h4>
                                                    <p>{ele.positionName}[{ele.city}]</p>
                                                    <span>{ele.createTime}</span>
                                            </div>
                                            <div className="hello_dl_right">
                                                    <b>{ele.salary}</b>
                                            </div>
                                        </dd>
                                        </dl>
                                        </NavLink>
                                </div>                          
                         )
                     })
                 }
                 <div style={ {display: this.state.flag}}>
                      <button className="hello_scroller" onClick={this.props.onjiajia.bind(this)}>☞ {this.state.text} ☜</button>
                      <p className="to_top" onClick={this.props.totop.bind(this)}>点击返回顶部 ↑</p>
                 </div>
                
            </div>
        )
    }
}
export default Gaojiejiazai(Job);