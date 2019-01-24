import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

//reducx中三个重要部分：action reducer state(store)
const counterReducer = function (state = {count:1},action){
  switch(action.type){
    case 'COUNT_ADD':
      return {
        ...state,count:state.count+1
      }
    case 'COUNT_REDUCE':
      return {
        ...state,count:state.count-1
      }
    default:
      return state
  }
}

const store = createStore(
  counterReducer
)//创建一个storage

console.log(store.getState())

//如果要改变一个reducer的值 需要使用dispatch派发一个action
//action需要两个参数
//  type      通过type区分是对state做什么样的操作
//  payload   传递的数据
store.dispatch({
  type:'COUNT_ADD',
  payload:{}
})
console.log(store.getState())

store.dispatch({
  type:'COUNT_REDUCE',
  payload:{}
})
console.log(store.getState())


class App extends Component {
  render() {
    return (
      <div className="App">
      dhfgj
      </div>
    );
  }
}

export default App;
