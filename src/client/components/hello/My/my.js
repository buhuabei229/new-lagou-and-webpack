import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './my.scss';
class My extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    componentDidMount(){
        const lagoulocal =  window.localStorage.getItem('lagouwang');
        if(lagoulocal){
              let val = JSON.parse(lagoulocal);
              this.setState({name: val.usename});
        } else {
              this.setState({name: ''});
        }
    }
    linkLogin(){
        if(this.state.name === ''){
           this.props.history.push('/login');
        }
    }
    exctlogin(){
        console.log('aa');
        window.localStorage.removeItem('lagouwang');
        this.componentDidMount();
    }
    render (){
        return (
            <div className="hello_my">
                 <div className="my_login"  onClick={this.linkLogin.bind(this)}>
                      <div>
                          <span style={{display: this.state.name? 'none':'block'}}>登录/注册</span>
                          <div><span>{this.state.name}</span></div>
                      </div>
                 </div>
                 <div className="my_link_list">
                      <div>投递</div>
                      <div>面试</div>
                      <div>邀约</div>
                      <div>收藏</div>
                 </div>
                 <div>
                     <button  className="login_login" 
                              style={{display: this.state.name? 'block':'none'}}
                              onClick={() => this.exctlogin()}
                              >退出登录</button>
                 </div>
            </div>
        )
    }
}
export default My;