/**
 * 使用 Thunk Middleware 来做异步 Action
 */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { increment , decrement , incrementIfOdd , incrementAsync} from './actions';


const store = createStore(reducer,{counter:10}, applyMiddleware(thunk));

function ui() {
  document.getElementById('root').innerHTML = store.getState().counter;
}
ui();
store.subscribe(ui);

//加一
store.dispatch(increment());
//减一
store.dispatch(decrement());
//奇数加一
store.dispatch(incrementIfOdd());
//异步加一
store.dispatch(incrementAsync());

