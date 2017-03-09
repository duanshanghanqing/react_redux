/**
 * 主要学习redux中 combineReducers 方法
 */



import { createStore } from 'redux'
import reducer from './reducers/index'
/**
 * 创建store并设置初始值
 */
let store = createStore(reducer,{
    todos:['a'],
    counter:10
})
console.log(store.getState())//返回所有reducer状态对象结果
/*
{
  counter:10，
  todos:['a']
}
*/


//添加一个ADD_TODO，会自动调用todos这个reducer函数。
store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())//返回调用指定reducer状态对象结果
/*
 {
   counter: 10,
   todos: [ 'a','Use Redux' ]
 }
*/

//让counter的值加1.传入INCREMENT这个action，会自动调用counter这个reducer函数。
store.dispatch({
  type: 'INCREMENT'
})
console.log(store.getState())
/*
 {
   counter: 11,
   todos: [ 'a','Use Redux' ]
 }
*/