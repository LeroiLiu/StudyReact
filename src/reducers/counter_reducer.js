/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 11:47:04
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 11:47:46
* @Last Modified time: 2019-01-24 11:47:04
*/
//reducx中三个重要部分：action reducer state(store)
const counterReducer = (state = {count:1},action) => {
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

export default counterReducer