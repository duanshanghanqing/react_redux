import React, { Component, PropTypes } from 'react'
import HomeComponent from '../components/Home'
//有状态组件负责写业务逻辑
class Home extends Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (<HomeComponent content="React 英雄联盟手机助手" />)
    }
}
export default Home