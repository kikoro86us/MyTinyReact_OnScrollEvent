import React, { Component } from 'react'
import Landing from './Landing'
import './../css/styles.css'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<p>Onscroll practice!</p>
				<Landing />
			</div>
		)
	}
}