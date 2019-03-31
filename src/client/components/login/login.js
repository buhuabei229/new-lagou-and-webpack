import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { logaction } from '../../redux/action.js';
import axios from 'axios';
import './login.scss';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            userf: 'hide',
            pwdf: 'hide'
        }
    }
    componentDidMount(){
        
    }
    onchange(){
            const usereg = /^[A-Za-z0-9\.]{6,11}$/;
            const userflag = usereg.test(this.use.value);
            const pwdflag = usereg.test(this.pwd.value);
            if(userflag === false){
                this.setState({userf: 'show'});
            } else {
                this.setState({userf: 'hide'});
            }
            if(pwdflag === false){
                this.setState({pwdf: 'show'});
            } else {
                this.setState({pwdf: 'hide'});
            }
            if(userflag && pwdflag){//判断用户名和密码的匹配， 控制登录按钮的显示隐藏
                this.setState({flag: true});
            } else {
                this.setState({flag: false});
            }
    }
    ongetval(){
          
          const val = {
              usename: this.use.value,
              password: this.pwd.value
          }
          this.props.dispatch(logaction(val));
          // 在这里可以判断用户名的登录与注册情况， 确认没问题后跳转到“我的 /hello/my”路由，否则 url为“/login”(不跳转)
          axios.get('/login/local').then((res) => {
               if(res.status === 200){
                //    this.props.history.push('/my');
                      
               }
          })  
    } 
    render (){
        return (
            <div className="login_page">
                 <div className="login_pwd">
                      <input type="text" 
                             placeholder="请输入已注册账号/邮箱" 
                             ref={(ref) => this.use = ref} 
                             onChange={this.onchange.bind(this)}
                             />
                      <small className={ this.state.userf }>账号有误</small>
                      <input type="password" 
                             placeholder="请输入你的密码" 
                             ref={(ref) => this.pwd = ref}
                             onChange={this.onchange.bind(this)}
                             />
                      <small className={ this.state.pwdf }>密码有误</small>
                 </div>
                 <button className="login_login" onClick={ this.ongetval.bind(this)} >
                      <Link to="/hello/my" className={this.state.flag? 'show': 'hide'}> 登录 </Link>
                 </button>
                 <p>还没账号?</p>
                 <button className="login_login login_register"><Link to="/hello">注册</Link></button>
            </div>
        )
    }
}
export default Login;