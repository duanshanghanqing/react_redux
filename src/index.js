import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, browserHistory } from 'react-router'
import App from './containers/App';//加载容器
import configureStore from './store/configureStore';

const store = configureStore({ counter: 10 });//通过传一个对象，key：指定的reducer名称。value：reducer的statemo默认值
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootEl);

/*
ReactDOM.render(
  <Provider store={store}>
    <Router  history={browserHistory} children={routes} />
  </Provider>,
  rootEl
)*/
