import React, {Component} from "react";
import LeaderBoardPost from "./LeaderBoardPost";


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
    const users = [];
    for(const user of this.state.userData){
      users.push(<LeaderBoardPost rank = '1' name = {user.name}  wins = {user.wins} matches = {user.matches}></LeaderBoardPost>)
    }
    return (
      <div className = "leaderBoard">
        <div className = "leaderBoardTitle">LeaderBoard</div>
        <ul className = "leaderBoardHeader">
          <p>Rank</p>
          <p>Name</p>
          <p>Wins</p>
          <p>Matches</p>
        </ul>
        {users}
      </div>
    )
  }
}

export default LeaderBoardContainer