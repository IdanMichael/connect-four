import React, {Component} from "react";


class MatchHistorySearch extends Component {
  constructor() {
    super();
    
    this.state = {
      player: '',
      matchData: [],
    };

  }
  componentDidMount () {
    let fetchedMatches = []
    fetch('/matches/match-history')
    .then(res => res.json())
    .then(data => {
      fetchedMatches = data
      this.setState({
        matchData: fetchedMatches
      })
    })
  }
  handleClick () {
    console.log('clicked')
    let searchedPlayer = document.getElementById('matchHistorySearchInput').value
    if(searchedPlayer === ''){return}
    let fetchedMatches = []
    fetch(`/matches/player-history/${searchedPlayer}`)
    .then(res => res.json())
    .then(data => {
      fetchedMatches = data
      this.setState({
        player: searchedPlayer,
        matchData: fetchedMatches
      })
    })
  }
  render() {
    const redPlayers = [];
    redPlayers.push(<h2>Red Player</h2>)
    const yellowPlayers = [];
    yellowPlayers.push(<h2>Yellow Player</h2>) 
    const movesToWin = []; 
    movesToWin.push(<h2>Moves To Win</h2>)
    const winner = [];
    winner.push(<h2>winner</h2>)
    const dates = [];
    dates.push(<h2>Date</h2>)
    let count = 0;
    for(const match of this.state.matchData){
      let classes = ''
      let redPlayerClass = ''
      let yellowPlayerClass = ''
      if(count%2 === 0){classes+= 'evens'}
      else{classes+= 'odds'}


      if(match.winner === 'red'){
        redPlayerClass+= ' winner'
        yellowPlayerClass+= ' loser'
      }
      else{
        yellowPlayerClass+= ' winner'
        redPlayerClass+= ' loser'
      }

      if(this.state.player === match.red_player){redPlayerClass+= ' highlighted'}
      if(this.state.player === match.yellow_player){yellowPlayerClass+= ' highlighted'}


      redPlayers.push(<p className = {classes + redPlayerClass}>{match.red_player}</p>)
      yellowPlayers.push(<p className = {classes + yellowPlayerClass}>{match.yellow_player}</p>) 
      movesToWin.push(<p className = {classes}>{match.turns}</p>)
      winner.push(<p className = {classes}>{match.winner}</p>)
      dates.push(<p className = {classes}>{match.date.split('T')[0]}</p>)
      count++
    }
    return (
      <div className = "matchHistorySearch">
        <div id = 'matchHistorySearchBar'>
          <input id = "matchHistorySearchInput"></input>
          <button id = 'matchHistroySearchButton' onClick = {() => this.handleClick()}>Search Player</button>
        </div>
        <div className = 'columnContainer'>
           <div>
            {dates}
          </div>
          <div>
            {redPlayers}
          </div>
          <div>
            {yellowPlayers}
          </div>
          <div>
            {winner}  
          </div>
          <div>
            {movesToWin}
          </div>
       
        </div>
      </div>
    )
  }
}

export default MatchHistorySearch