import { TOLOGIN, logaction } from './action.js';
import { createStore, ReducersMapObject } from 'redux';
let initstate = { // 初始化数据
}
const todoapp = ((initstate, action) => {
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
