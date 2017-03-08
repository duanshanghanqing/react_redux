//有状态组件
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/counter'
class Inbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (<div>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={() => incrementAsync()}>Increment async</button>
            </div>);
  }
}
Inbox.propTypes = {
  
};
export default connect(
  state => ({ counter: state.counter }),//state.counter：获取指定的reducer返回状态值。赋值给counter属性，最后返回  { counter: state.counter }  这个对象
  dispatch => bindActionCreators(actions, dispatch)//使用了这个方法，主要简化了 方式二。使之可以把 Action的集合全部绑定到dispatch中。少写了好多代码
)(Inbox);