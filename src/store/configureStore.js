import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {//接收一个初始值
  /**
   * createStore(reducer, [preloadedState], enhancer)
   * reducer:接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
   * [preloadedState]（负载状态）:在调用createStore方法时，初始化给todos方法中的state赋值。可选参数，不填时就在todos方法中设置默认值
   * Store enhancer(增强) 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。就是使用中间件
   * 
   * compose(...functions):从右到左来组合多个函数。这是函数式编程中的方法，为了方便，被放到了 Redux 里,当需要把多个 store 增强器 依次执行的时候，需要用到它。
   */

  
  //写法一（推荐）
  
  const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f//调用开发命令行
    )
  );


  //写法二
  //applyMiddleware来自redux可以包装 store 的 dispatch
  //thunk作用是使action创建函数可以返回一个function代替一个action对象
  //const store = compose(applyMiddleware(thunkMiddleware)(createStore)(rootReducer, initialState))





  //module.hot 这个可以不用管，这是 webpack 热加载的处理，你也可以不要他。
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
