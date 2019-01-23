/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-23 11:53:42
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-23 13:00:22
* @Last Modified time: 2019-01-23 11:53:42
*/
import React from 'react'

class CommentBox extends React.Component{
/*
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
	}

	handleChange = (e) => {
		console.log(e.target)
		this.setState({
			value:e.target.value
		})
	}

	handleSubmit = (e) => {
		alert(e.state.value)
		e.preventDefault()
	}

	render(){
		return (

			<form className="p-5" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>留言内容</label>
					<input 
						type="text" 
						className="form-control" 
						placeholder="请输入" 
						value={this.state.value}
						onChange={this.handleChange}
					>
					</input>
				</div>
				<button type="submit" className="btn btn-priary">留言</button>
			</form>

		)
	}

*/


	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit (e) {
		alert(this.textInput.value)
		e.preventDefault()
	}

	render(){
		return (

			<form className="p-5" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>留言内容</label>
					<input 
						type="text" 
						className="form-control" 
						placeholder="请输入" 
						ref = {(textInput)=>{this.textInput = textInput}}
					>
					</input>
				</div>
				<button type="submit" className="btn btn-priary">留言</button>
			</form>
