#react Demo

##npm install

##npm run dev（开发环境）

##npm run build (生产环境)

##npm start (启动服务)

##访问 http://localhost:9999/views/index.html

## 目录介绍

### actions放用户行为
### reducer是返回应用要使用的数据，由store统一管理。
### components主要目的是负责应用如何显示（样式，布局），不在redux数据流中。通过从props获取数据。通过从props调用回调函数修改数据。具体实现方式手写
### containers主要目的是赋值应用如何工作（数据获取，状态更新），在redux数据流中。通过从redux获取state数据。通过redux派发actions修改数据。实现方式由react-redux生成。

## 扩展知识 常用工具
### react-redux：除了在react中绑定，还可以在ng,ng2,backbone,deku,中使用
### redux-thunk:异步数据流，用于发送ajax，实现异步action
### redux-gen:利用生成器实现middleware
### react-router-redux:把react路由和redux数据流结合起来
### react-redux-form:表单提交的第三方扩展


### src01：主要学习redux 基本使用以及原理
### src02：主要学习redux combineReducers 方法
### src03：主要学习redux 自定义中间件 和 使用 Thunk Middleware 来做异步 Action
### src04：主要学习redux  react-redux 各个API的使用，并做一个完整的demo
