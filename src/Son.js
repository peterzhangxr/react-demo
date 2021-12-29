import React, { Component } from 'react'
import SonChild from './SonChild'

class Son extends Component {
	constructor (props) {
		super(props)
		this.btnClick = this.btnClick.bind(this)
	}
	componentDidMount () {
		console.log('son mounted')
	}
	componentDidUpdate() {
		console.log('son update')
	}
	shouldComponentUpdate () {
		
	}
	btnClick () {
		console.log('btn click')
		this.setState({})
	}
	render () {
		return (
			<div>
				<div>son</div>
				<SonChild />
				<button onClick={this.btnClick}>刷新</button>
			</div>
		)
	}
}
export default Son