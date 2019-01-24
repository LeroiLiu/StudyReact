/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 11:44:57
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 14:36:18
* @Last Modified time: 2019-01-24 11:44:57
*/
const postReducer = (state={list:[{id:1,title:"你好"}]},action) => {
  switch(action.type){
    case 'LOAD_POSTS':
      return {
        ...state,list:action.payload
      }
    default:
      return state;
  }
}


export default postReducer