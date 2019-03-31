import React, { Component } from 'react';
import { TOLOGIN, logaction } from './action.js';
import { connect, Provider } from 'react-redux';
import { createStore, ReducersMapObject } from 'redux';
import Login from '../components/login/login.js';
import Mock from 'mockjs';
const todoapp = ((state = {}, action) => {
    switch (action.type) {
        case TOLOGIN :
                 Mock.mock('/login/local', action.val);
                 window.localStorage.setItem('lagouwang', JSON.stringify(action.val) );
                 console.log(action);
            break;
    
        default:
            break;
    }
})
const store = createStore(todoapp);
const Todologin = connect()(Login);
class ReduxLogin extends Component {
    render(){
        return (
            <Provider store={store}>
               <Todologin />
            </Provider>
        )
    }
}
export default ReduxLogin;