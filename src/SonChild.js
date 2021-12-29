import React, { Component } from 'react'

class SonChild extends Component {
	componentDidMount () {
		console.log('son child mounted')
	}

	componentDidUpdate() {
		console.log('son child update')
	}
	render () {
		return (
			<div>son child</div>
		)
	}
}
export default SonChild