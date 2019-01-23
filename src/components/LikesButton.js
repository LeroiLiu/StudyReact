/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-23 11:41:27
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-23 11:51:08
* @Last Modified time: 2019-01-23 11:41:27
*/
import React from 'react'

class LikesButton extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			likes: 0
		}
		//this.increaseLikes = this.increaseLikes.bind(this)
	}

	increaseLikes(){
		this.setState({
			likes:++this.state.likes
		})
	}

	render(){
		return (
			<div className="likes-button-component">
				<button 
					className="btn btn-outline-primary btn-lg"
					type="button"
					//onClick={this.increaseLikes}
					onClick ={()=>{this.increaseLikes()}}
				>
					👍 {this.state.likes}
				</button>
			</div>
		)
	}



}

export default LikesButton