import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';//加载容器
import configureStore from './store/configureStore';

const store = configureStore({ counter: 10 });//通过传一个对象，key：指定的reducer名称。value：reducer的statemo默认值
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootEl);
/*
<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
*/