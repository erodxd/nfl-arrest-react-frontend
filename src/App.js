/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import './App.sass'
import PlayerContainer from './containers/PlayerContainer'


const API = "http://NflArrest.com/api/v1/player"

class App extends Component {

  state = {
    players: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        players: data
      })
    })
  }

  render() {
    return (
    <div className="App">
      <h1 className="title">NFL Arrest Records</h1>
        <p className="subtitle">
            NFL Arrest data based on  {' '}
          <a href="https://http://nflarrest.com/api/">
            NFL Arrest API 
          </a>
        </p>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="field">
      <div className="control">
        <input className="input" type="text" placeholder="Input" />
      </div>
      </div>

      <div>
        <PlayerContainer players={this.state.players}/>
      </div>


      <div className="buttons">
        <a className="button is-primary">Sign-Up</a>
        <a className="button is-link">Logout</a>
      </div>
    </div>
    );
  }
}

export default App;

