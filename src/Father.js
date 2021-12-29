import React, { Component } from 'react'
import Son from './Son'

class Father extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount () {
		console.log('father mounted')
	}
	componentDidUpdate() {
		console.log('father update')
	}
	shouldComponentUpdate() {
		console.log('father shoud')
		return true
	}
	render() {
		return <div>Father<Son /></div>
	}
}

export default Father