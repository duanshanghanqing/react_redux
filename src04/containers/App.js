/**
 * 连接 React 组件与 Redux store。
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 *    mapStateToProps(state, ownProps) : stateProps        ：这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
 *    mapDispatchToProps(dispatch, ownProps): dispatchProps      ：把 Action的集合全部绑定到dispatch中
 *    mergeProps
 */


//方式一（优先级二）
/*
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Counter from '../components/Counter';//加载组件
export default connect(
  state => ({ counter: state.counter }),//state.counter：获取指定的reducer返回状态值。赋值给counter属性，最后返回  { counter: state.counter }  这个对象
  ActionCreators,  //所有action的集合 ，是 {increment,decrement,incrementIfOdd,incrementAsync} 这样的一个东西
)(Counter);//合并多个对象成一个对象，作用于Counter组件上。组件就可以获取指定reducer返回的状态结果，又可以操作action
*/



//方式二（优先级三）
/*
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';
export default connect(
  state => ({ counter: state.counter }),//state.counter：获取指定的reducer返回状态值。赋值给counter属性，最后返回  { counter: state.counter }  这个对象
  dispatch => ({//这个给dispatch方法手动注入组件要使用的actions方法。这样注入后可直接在组件dom中操作action
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementIfOdd: () => dispatch(incrementIfOdd()),
    incrementAsync: () => dispatch(incrementAsync()),
  })
)(Counter);
*/
//以上写法等价于一下写法
/**
 * 参数state：将 store 中的数据作为 props 绑定到组件上。
 * 参数ownProps：是 Counter 自己的 props。有的时候，ownProps 也会对其产生影响。
 */
/*
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';
//当 state 变化，或者 ownProps 变化的时候，mapStateToProps 都会被调用，计算出一个新的 stateProps，（在与 ownProps merge 后）更新给 Counter 的 props。
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}
//由于 mapDispatchToProps 方法返回了具有 increment,decrement,incrementIfOdd,incrementAsync 属性的对象，这4个属性也会成为 Counter 的 props。
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (...args) => dispatch(increment(...args)),
    decrement: (...args) => dispatch(decrement(...args)),
    incrementIfOdd: (...args) => dispatch(incrementIfOdd(...args)),
    incrementAsync: (...args) => dispatch(incrementAsync(...args))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
*/





//方式三（优先级一）

import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
export default connect(
  state => ({ counter: state.counter }),//state.counter：获取指定的reducer返回状态值。赋值给counter属性，最后返回  { counter: state.counter }  这个对象
  dispatch => bindActionCreators(ActionCreators, dispatch)//使用了这个方法，主要简化了 方式二。使之可以把 Action的集合全部绑定到dispatch中。少写了好多代码
)(Counter);





//方式四（不推荐）
/*
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

function Counter({ counter, dispatch }) {//这里将会自动给组件传递一个dispatch
  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={() => dispatch(increment())}>+</button>
      {' '}
      <button onClick={() => dispatch(decrement())}>-</button>
      {' '}
      <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
      {' '}
      <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
    </p>
  );
  //使用户自己使用dispatch来发起action创建函数。
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

//这样写只是把组件和容器合并在一起了。所有就不要Action 绑定 dispatch。。这样写不好，最好拆开
export default connect(
  state => ({ counter: state.counter })//state.counter：获取指定的reducer返回状态值。赋值给counter属性，最后返回  { counter: state.counter }  这个对象
)(Counter);
*/






//方式五（不推荐）
/**
 * 使用装饰器应该写发将connect()写在组件类的声明上。装饰器写法和前面的写法只是语法上的区别，
 * 其他并无二致。使用装饰器写法，就不能使用无状态函数来编写组件，装饰器需要添加在类声明上。
 * 还需要使用 static propTypes = {...} 这种静态属性
 */
/*
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
@connect(
  state => ({ counter: state.counter }),
  ActionCreators
)
class Counter extends Component { // eslint-disable-line

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}// 这里必须写成箭头函数，否则incrementAsync中的delay参数将会是SyntheticEvent的实例

export default Counter;
*/











/*
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Counter from '../components/Counter';//加载组件
export default connect(
  state => ({ state: state }),//state.counter：获取指定的reducer返回状态值。赋值给counter属性，最后返回  { counter: state.counter }  这个对象
  ActionCreators  //所有action的集合 ，是 {increment,decrement,incrementIfOdd,incrementAsync} 这样的一个东西
)(Counter);//合并多个对象成一个对象，作用于Counter组件上。组件就可以获取指定reducer返回的状态结果，又可以操作action
*/