/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-24 14:05:48
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-24 14:32:07
* @Last Modified time: 2019-01-24 14:05:48
*/
import React from 'react';
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action'


class PostList extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props)
	}

	componentDidMount() {
		this.props.dispatch(loadPostsAction)//加载远程数据
	}


	render() {
		const { list } = this.props.post;
		const Posts = list.map(post=>{
			return (<li key={post.id}>{post.title}</li>)
		})

		return (
			<div>
				<ul>{ Posts }</ul>
			</div>
		);
	}
}


const mapStateToProps = (state,ownProps) => {
	return {
		post:state.post
	}
}

//通过connect连接组件和redux数据
export default connect(mapStateToProps)(PostList)