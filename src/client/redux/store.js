import todoapp from './reducer.js'
import { Provider } from 'react-redux';
import { createStore, ReducersMapObject } from 'redux';
const store = createStore(todoapp);
export default store
