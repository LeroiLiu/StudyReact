/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 11:37:55
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 13:06:24
* @Last Modified time: 2019-01-24 11:37:55
*/
import { getPosts } from '../serices/post_api';


export const loadPostsAction = async (dispatch) =>{
	const res = await getPosts()
	dispatch({
		type:'LOAD_POSTS',
		payload:res.data
	})
}