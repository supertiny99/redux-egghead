import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// 创建 store
let store = createStore(counter);

// console.log(store);
// {
//   dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer]
// }

// 订阅 ( subscribe )，注册回调
store.subscribe(() => {
  console.log(store.getState());
});
// 分发（ dispatch ) 行为 （ action ） 改变状态
store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: "DECREMENT" });
