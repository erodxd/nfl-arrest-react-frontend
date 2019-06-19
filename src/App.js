/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import './App.sass'
import PlayerContainer from './containers/PlayerContainer'
import SortBar from './components/SortBar';
import { Route } from 'react-router-dom';
import SearchInput from './components/SearchInput'

const playerAPI = "http://localhost:3000/players"
class App extends Component {

  state = {
    players: [],
    filter: ""
  }

  changeFilter = (newFilterValue) => {
    this.setState({
      filter: newFilterValue
    })
  }

  componentDidMount(){
    this.getPlayers()
  }
  
  getPlayers = () => {
    fetch(playerAPI)
    .then(res => res.json())
    .then(data => {
      this.setState({
        players: data
      })
    })
  }

  sortPlayerPosition = () => {
    //console.log(this.state.players)
    const playerPositions = [...this.state.players].sort((a,b) => (a.position > b.position) ? 1 : -1 )
    this.setState({
      players: playerPositions
    })
  }

  sortByTeam = () => {
    const teamSort = [...this.state.players].sort((a,b) => (a.team > b.team) ? 1 : -1 )
    this.setState({
      players: teamSort
    })
  }

  sortByCity = () => {
    const citySort = [...this.state.players].sort((a,b) => (a.team_city > b.team_city) ? 1 : -1 )
    this.setState({
      players: citySort
    })
  }

  render() {
    return (
    <div className="App">
      <h1 className="title">NFL Arrest Records</h1>
        <p className="subtitle">
            NFL arrest data powered by  {' '}
          <a href="http://nflarrest.com/api/">
            NFL Arrest API 
          </a>
        </p>

      <div className="buttons">
        <a className="button is-primary">Sign-up</a>
        <a className="button is-link">Comments</a>
      </div>

      <div>
        <SearchInput changeFilter={this.changeFilter}/>
        <SortBar sortPlayerPosition={this.sortPlayerPosition} sortByTeam={this.sortByTeam} sortByCity={this.sortByCity}/>
        <PlayerContainer players={this.state.players} filter={this.state.filter}/>
      </div>
    </div>
    );
  }
}

export default App;

