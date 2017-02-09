import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {//接收一个初始值
  /**
   * createStore(reducer, [preloadedState], enhancer)
   * reducer:接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
   * [preloadedState]（负载状态）:在调用createStore方法时，初始化给todos方法中的state赋值。可选参数，不填时就在todos方法中设置默认值
   * Store enhancer(增强) 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。就是使用中间件
   */

  
  //写法一（推荐）
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware))
  );

  //写法二
  //const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);

  //写法三
  //const finalCreateStore=applyMiddleware(thunkMiddleware)(createStore);
  //const store = finalCreateStore(rootReducer)

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
