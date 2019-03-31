import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../../redux/reducer.js';
import Hello from '../hello/hello';
import Jobpages1 from '../hello/Job/jobpages/jobpages1.js';

import '../../../../public/icon/iconfont.css';
import './App.scss';
class App extends Component {
    render (){
        return (
            <div className="app_page">
                <Router>
                    <Switch>
                        <Route  exact path="/" render={ () => <Redirect to="/hello" />}/>
                        <Route  path="/hello" component={Hello}/>
                        <Route  path="/login" component={Login}/>
                        <Route  path="/jobpages1/:id" component={Jobpages1}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;