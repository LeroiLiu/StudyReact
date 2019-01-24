/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 11:34:08
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 11:35:58
* @Last Modified time: 2019-01-24 11:34:08
*/
import { get } from 'axios';


//发送api请求获取数据
export function getPosts(){
	return get('https://jsonplaceholder.typicode.com/posts')
}