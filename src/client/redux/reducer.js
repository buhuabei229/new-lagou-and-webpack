import { TOLOGIN, logaction } from './action.js';
import { createStore, ReducersMapObject } from 'redux';
const todoapp = ((state = {}, action) => {
    switch (action.type) {
        case TOLOGIN :
                 window.localStorage.setItem('lagouwang', JSON.stringify(action.val) );
                 console.log(action);
            break;
        default:
            break;
    }
})
export default todoapp;
