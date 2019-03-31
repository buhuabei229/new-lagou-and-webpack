import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import './hello.scss';
import Job from './Job/job';
import Findx from './Find/findx';
import My from './My/my';

class Hello extends Component {
    render (){
        return (
            <div className="hello_page">
                <h4>拉钩网</h4>
                <div className="hello_section">  
                          <Switch>
                                <Route exact path="/hello" render={() => <Redirect to="/hello/Job" />}/>
                                <Route path="/hello/job" component={ Job } />
                                <Route path="/hello/findx" component={ Findx }/>
                                <Route path="/hello/my" component={ My } />
                          </Switch>
                </div>
                <div className="footer">
                    <NavLink className="hello_footer" to="/hello/job">
                        <i className="icon iconfont icon-shouye"></i>职位
                    </NavLink>
                    <NavLink className="hello_footer" to="/hello/findx">
                        <i className="icon iconfont icon-sousuo" style={{fontSize: '14px', marginTop: '2px',marginRight: '2px'}}></i>
                        搜索
                    </NavLink>
                    <NavLink className="hello_footer" to="/hello/my">
                        <i className="icon iconfont icon-wode" style={{marginRight: '2px'}}></i>我的
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default Hello;