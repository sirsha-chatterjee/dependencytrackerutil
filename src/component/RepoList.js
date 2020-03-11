import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      repos :[],
      loading : true
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/getRepoListTrialGetJson?root=platform-services-common')
			.then(response => {
				console.log(response.data[0])
				this.setState({ repos :response.data[1] })
			})
			.catch(error => {
        console.log(error.response)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		return (
			<div>
				{!this.state.repos ? (<div>loading...</div>): (<div>{this.state.repos.name}</div>)}
			</div>
		)
	}
}

export default PostList