/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 11:54:46
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 14:09:48
* @Last Modified time: 2019-01-24 11:54:46
*/
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'//异步
import rootReducers from './reducers'

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk])//需要使用的中间件数组
  )
)//创建一个storage

export default store