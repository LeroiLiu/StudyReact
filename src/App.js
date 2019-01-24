import React, { Component } from 'react';
import './App.css';
import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'//异步
import { get } from 'axios';

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

const postReducer = function(state={list:[{title:"你好"}]},action){
  switch(action.type){
    case 'LOAD_POSTS':
      return {
        ...state,list:action.payload
      }
    default:
      return state;
  }
}

//通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
  counter:counterReducer,
  post:postReducer
})

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk])//需要使用的中间件数组
  )
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


const getPostsRequest = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async function(dispatch){
  const res = await getPostsRequest()
  console.log(res.data)
  dispatch({
    type:'LOAD_POSTS',
    payload:res.data
  })
})

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
