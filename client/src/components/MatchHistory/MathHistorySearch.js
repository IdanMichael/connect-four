import React, {Component} from "react";


class MatchHistorySearch extends Component {
  constructor() {
    super();
    
    this.state = {
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
        matchData: fetchedMatches.reverse()
      })
    })
  }
  render() {
    const matches = [];
    for(const match of this.state.matchData){
      matches.push(
        <ul className = "leaderBoardHeader">
          <p>{match.red_player}</p>
          <p>{match.yellow_player}</p>
          <p>{match.turns}</p>
          <p>{match.winner}</p>
          <p>{match.date}</p>
        </ul>
        )
    }
    return (
      <div className = "matchHistorySearch">
        <div id = 'matchHistorySearchBar'>
          <input className = "matchHistorySearchInput"></input>
          <button id = 'matchHistroySearchButton' >Search Player</button>
        </div>
        <ul className = "leaderBoardHeader">
          <p>RedPlayer</p>
          <p>YellowPlayer</p>
          <p>Number of Moves to Win</p>
          <p>Winner</p>
          <p>Date</p>
        </ul>    
        {matches}
        <h1>test</h1>
      </div>
    )
  }
}

export default MatchHistorySearch