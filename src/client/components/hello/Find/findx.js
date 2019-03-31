import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Find from './find';
import Citylist from './citylist';
class Findx extends Component {
    render () {
        return (
                <Switch>
                    <Route exact path="/hello/findx" render={() => <Redirect to="/hello/findx/find" />} />
                    <Route path="/hello/findx/find" component={Find} />
                    <Route path="/hello/findx/citylist" component={Citylist} />
                </Switch>
        )
    }
}
export default Findx;