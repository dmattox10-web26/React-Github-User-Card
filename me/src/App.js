import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  render() {
    const { user, followers } = this.state
    return (
      <div className='App'>
        <div className='container'>
          <div className='spacer'></div>
          
          <div className='row'>
            <div className='col s7'>
              <div className='panel'>
              <img src="./githublogo.png" alt="GitHub Logo" /><h1>&nbsp;{ user.name }</h1>
  
              </div>
            </div>
            <div className='col s5'>
              <div className='panel'>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
