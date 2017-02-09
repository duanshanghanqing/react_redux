import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';
//reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
