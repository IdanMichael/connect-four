import React, {Component} from "react";
import LeaderBoardPost from "./LeaderBoardPost";


class LeaderBoardContainer extends Component {
  render() {
    let post = <LeaderBoardPost rank = '1' name = 'idan' moves = '5' opponentName = 'bot'></LeaderBoardPost>
    return (
      <div className = "leaderBoard">
        <div className = "leaderBoardTitle">LeaderBoard</div>
        <ul className = "leaderBoardHeader">
          <p>Rank</p>
          <p>Name</p>
          <p>Number of Moves to Win</p>
          <p>Opponent</p>
        </ul>
        {post}
      </div>
    )
  }
}

export default LeaderBoardContainer