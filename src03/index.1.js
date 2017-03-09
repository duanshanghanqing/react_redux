/**
 * 自定义中间件
 * 自定义 Logger Middleware
 */

import { createStore, applyMiddleware } from 'redux'
import todos from './reducers/todos'

function logger({ getState }) {//getState：其实为 store.getState()
  return (next) => (action) => {
    //console.log(action);//action:为每次调用store.dispatch()方法穿进来的 对象

    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)

    console.log( getState() );//getState():每次调用store.dispatch()方法会触发getState()方法，返回处理结果

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue//returnValue:为最近一次调用store.dispatch()方法返回的结果
  }
}

let store = createStore(
  todos,
  [ 'Use Redux' ],
  applyMiddleware(logger)
)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware1'
})
store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware2'
})
// (将打印如下信息:)
/*
["Use Redux", "Understand the middleware1"]
["Use Redux", "Understand the middleware1", "Understand the middleware2"]
*/