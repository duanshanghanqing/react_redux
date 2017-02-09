/**
 * 主要学习redux 基本使用以及原理
 */

import { createStore } from 'redux';

//1.定义Action
/** Action Creators */
var Action = {
    inc:function(){
        return { type: 'INCREMENT' };
    },
    dec:function(){
        return { type: 'DECREMENT' };
    }
}
//2.定义处理不同 Action 动作返回不同 state 结果的机器
function reducer(state, action) {
    state = state || { counter: 0 };
    switch (action.type) {
        case 'INCREMENT':
        return { counter: state.counter + 1 };
        case 'DECREMENT':
        return { counter: state.counter - 1 };
        default:
        return state; 
    }
}

//3.创建store
/**
 * createStore(reducer, [preloadedState], enhancer)
 * reducer:接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
 * [preloadedState]（负载状态）:在调用createStore方法时，初始化给todos方法中的state赋值。可选参数，不填时就在todos方法中设置默认值
 * Store enhancer(增强) 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。就是使用中间件
 */
var store = createStore(reducer,{counter: 10});//这里暂时没用到

//4.使用store处理的状态结果
var render = function(){
    document.getElementById("root").innerHTML='<h1>hello world</h1> '+store.getState().counter;
}
render();//初始化调用。store.getState().counter返回的是创建store时设置初始值


//5.添加一个变化监听器
/**
 * 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 getState() 来拿到当前 state。
 */
store.subscribe(render);

//6.分发 action
/**
 * 分发 action。这是触发 state 变化的惟一途径。
 * 会使用当前 getState() 的结果和传入的 action 以同步方式的调用 store 的 reduce 函数。返回值会被作为下一个 state。从现在开始，
 * 这就成为了 getState() 的返回值，同时变化监听器(change listener)会被触发。
 */
store.dispatch(Action.inc());
store.dispatch(Action.inc());
store.dispatch(Action.inc());