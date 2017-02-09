import { combineReducers } from 'redux'
import counter from './counter'
/**
 * 随着应用变得复杂，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分。
 * combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，
 * 然后就可以对这个 reducer 调用 createStore。
 * combineReducers({ counter, todos })。这与 combineReducers({ counter: counter, todos: todos }) 是一样的
 */

/*
export default combineReducers({
  todos,
  counter
});
*/
//以上写法和一下写法是一样的
export default combineReducers({
  counter:counter
})
