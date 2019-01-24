/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 11:51:18
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 11:53:37
* @Last Modified time: 2019-01-24 11:51:18
*/
import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';
import postReducer from './post_reducer';

//通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
  counter:counterReducer,
  post:postReducer
})

export default rootReducers