import React, {Component} from "react";

class LeaderBoardContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      userData: [],
    };

  }
  componentDidMount () {
    let fetchedUsers = []
    fetch('/leader-board')
    .then(res => res.json())
    .then(data => {
      fetchedUsers = data
      this.setState({
        userData: fetchedUsers
      })
    })
  }
  render() {
    const ranks = [];
    ranks.push(<h2>Rank</h2>)
    const names = [];
    names.push(<h2>Names</h2>) 
    const wins = []; 
    wins.push(<h2>Wins</h2>)
    const matches = [];
    let count = 0;
    matches.push(<h2>Matches</h2>)
    for(let i = 0; i < this.state.userData.length; i++){
      let classes = ''
      if(count%2 === 0){classes+= 'evens'}
      else{classes+= 'odds'}

      const user = this.state.userData[i]
      ranks.push(<p key = {i} className = {classes}>{i + 1}</p>)
      names.push(<p key = {i} className = {classes}>{user.name}</p>) 
      wins.push(<p key = {i} className = {classes}>{user.wins}</p>)
      matches.push(<p key =  {i} className = {classes}>{user.matches}</p>)

      count++
    }
    return (
      <div className = "leaderBoard">
        <h1 className = "leaderBoardTitle">LeaderBoard</h1>
        <div className = 'columnContainer'>
          <div>
            {ranks}
          </div>
          <div>
            {names}
          </div>
          <div>
            {wins}  
          </div>
          <div>
            {matches}
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderBoardContainer