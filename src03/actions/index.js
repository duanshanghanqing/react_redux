export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
//加一
export function increment() {
  return { type: INCREMENT };
}

//减一
export function decrement() {
  return { type: DECREMENT };
}

//奇数加一
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const value = getState();
    if (value % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

//异步加一
/*
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
*/
export function incrementAsync(delay = 5000) {
  return function(dispatch){
	//模拟异步请求
    console.log("发送请求");
     console.log("请求中...");
	setTimeout(function(){
        console.log("请求结束");
		dispatch(increment());
	}, delay);
  }
}
