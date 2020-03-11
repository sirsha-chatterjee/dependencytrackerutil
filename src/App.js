/*import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
class App extends Component {
  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
  Click Me
</button>
      </div>
    )
  }

  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:8080/getRepo')
      .then(response => console.log(response))
  }
}
export default App*/

/*
import React, { Component } from 'react'
import './App.css'
//import PostList from './component/PostList'
import PostForm from './component/PostForm'

class App extends Component {
	render() {
		return (
			<div className="App">
				<PostForm />
				
			</div>
		)
	}
}

export default App*/

  
import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DependencyList from './component/DependencyList'

class App extends Component {
	render() {
		return (
			<div className="App">
				<DependencyList />
				{/* <PostList /> */}
			</div>
		)
	}
}

export default App