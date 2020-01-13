import React, { Component } from 'react'
import axios from 'axios'
import { GithubContributions } from "react-github-graph"

import Follower from './components/Follower'

import './App.css'

const url = 'https://api.github.com/users/'
class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'dmattox10',
      userData: {},
      followers: [],
      userIMG: './githublogo.png'
    }
  }

  componentWillMount() {
    axios.get(`${url}${this.state.user}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        ...this.state,
        user: res.data.login,
        userIMG: res.data.avatar_url
      })
    })
  }

  componentDidMount() {
    axios.get(`${url}${this.state.user}/followers`)
    .then(res => {
      console.log(res.data)
      this.setState({
        ...this.state,
        followers: res.data
      })
    })
  }

  render() {
    const { userData, user, followers, userIMG } = this.state
    return (
      <div className='App'>
        <div className='container'>
          <div className='spacer'></div>
          
          <div className='row'>
            <div className='col s7'>
              <div className='panel'>
                <img src={ userIMG } alt="GitHub Logo" /><h2>&nbsp;{ user }</h2>
              </div>
              <div className='panel'>
                <GithubContributions username={ user }></GithubContributions>
              </div>
            </div>
            <div className='col s5'>
              <div className='row' style={{textAlign: 'center'}}><h2>Followers:</h2></div>
              {
                followers.map(follower => 
                  <div className='panel'>
                  <Follower follower={ follower } />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
