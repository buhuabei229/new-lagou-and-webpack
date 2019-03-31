import React, {Component} from 'react';
import './find.scss';
import fetch from  'isomorphic-fetch';
import { NavLink, Link } from 'react-router-dom';
import citylist from '../../../../../public/city.js';
import Gaojiejiazai from '../../gaojie/gaojie.js';
class Find extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: '全国',
            src: '',
            oldlist: [],
            list: [],
            len: 20,
            newlen:0,
            text: '加载更多',
            bgcolor: '',
            flag: "hide",
            texts: '将搜索地区和关键词作为定制条件',
            flags:　"block"
        }                                       
    }
    getval(){// 点击搜索时做正则匹配和数据的筛选
          console.log(this.ipt.value);
          const arr = this.state.oldlist;
          let   newarr = [];
          const reg = new RegExp( this.ipt.value, 'g' );
          arr.map((ele,index) => {
              if (this.state.city === '全国' && reg.test(ele.positionName) ) {
                  newarr.push(ele);
              } else if (this.state.city === '全国' && reg.test(ele.companyName)) {
                  newarr.push(ele);
              } else if ( this.state.city === ele.city && (reg.test(ele.positionName ) || reg.test(ele.companyName))) {
                  newarr.push(ele);
             } //else if(reg.test(ele.positionName) || reg.test(ele.companyName)){
            //        newarr.push(ele);
            //   }
          })
          this.setState({list: newarr}, () => {
               if(this.state.list.length){
                   this.setState({texts: '将搜索地区和关键词作为定制条件', bgcolor: ''});
               }  else {
                this.setState({texts: '☹搜索不到', bgcolor: 'white'});
               }
          });
    }
    oniptfocus(){
        //   this.setState({list: this.state.oldlist});  
    }
    componentDidMount(){
        this.setState({newlen: this.state.len});
        if(this.props.location.state){
            this.setState({city:　this.props.location.state}, () => {
                setTimeout(() => {
                    let arr = this.state.oldlist;
                    let newarr = [];
                    arr.map((ele, index) => {
                        if(this.props.location.state === ele.city) {
                            newarr.push(ele);
                        }
                    })
                    this.setState({list: newarr}, () => {
                       if(this.state.list.length){
                           this.setState({texts: '将搜索地区和关键词作为定制条件', bgcolor: ''});
                       }  else {
                        this.setState({texts: '☹搜索不到', bgcolor: 'white'});
                       }
                  });
                },500)
                }
            );
        }
        fetch('/list/data').then((req, res) => {
            return  req.json() ;
         }) .then((data) => {
                this.setState({
                    src: data.src,
                    list:data.result,
                    oldlist: data.result
                });
         });
    }
    render (){
        const newlist = this.state.list.length > 0? this.state.list.slice(0, this.state.newlen): [];
        const flags = newlist.length >= this.state.len ? 'block' : 'none'; 
        return (
            <div className="hello_find" ref={(ref) => this.hellojob = ref}>
                 <div className="find_sousuo">
                    <div>
                        <Link to={{
                                    pathname: `/hello/findx/citylist`,
                                    state: this.state.city
                        }}>{this.state.city}<p>›</p>
                        </Link></div>  
                    <div>
                        <input placeholder="搜索职位或公司" ref={(ref) => this.ipt = ref}  onFocus={this.oniptfocus.bind(this)}/>
                    </div>
                    <div onClick={this.getval.bind(this)}>
                        <i className="icon iconfont icon-sousuo"></i>
                    </div>
                 </div>
                 <div className={`find_wanning ${this.state.bgcolor}`}>
                     {this.state.texts}
                 </div>
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
                 <div style={{display: flags}}>
                      <button className="hello_scroller" onClick={this.props.onjiajia.bind(this)}>☞ {this.state.text} ☜</button>
                      <p className="to_top" onClick={this.props.totop.bind(this)}>点击返回顶部 ↑</p>
                 </div>
            </div>
        )
    }
}
export default Gaojiejiazai(Find);