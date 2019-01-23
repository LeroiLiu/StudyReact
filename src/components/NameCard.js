/*
* @Author: Leroi
* @E-mail: leroiliu@163.com
* @explore:http://ulu.ink
* @github: https://github.com/LeroiLiu
* @csdn:   https://blog.csdn.net/leroi_liu
* @Date:   2019-01-23 10:46:53
* @Last Modified by:   leroi
* @Last Modified time: 2019-01-23 11:32:48
* @Last Modified time: 2019-01-23 11:02:58
*/
import React from 'react'

const NameCard = (props) =>{

	const { name,number,isHuman,tags } = props

	return (

		<div className="alert alert-success">
			<h1 className="alert-heading">{name}</h1>
			<ul>
				<li>电话：{number}</li>
				<li>{isHuman?'人类':'外星人'}</li>
			</ul>

			<p>
				{tags.map((tag,index)=>(
					<span className="badge badge-pill badge-primary" key={index}>{tag}</span>
				))}
			</p>
		</div>

	)
}


/*

class NameCard extends React.Component{
	render(){
		const { name,number,isHuman,tags } = this.props
		return (
			<div className="alert alert-success">
				<h1 className="alert-heading">{name}</h1>
				<ul>
					<li>电话：{number}</li>
					<li>{isHuman?'人类':'外星人'}</li>
				</ul>

				<p>
					{tags.map((tag,index)=>(
						<span className="badge badge-pill badge-primary" key={index}>{tag}</span>
					))}
				</p>
			</div>
		)

	}
}*/

export default NameCard