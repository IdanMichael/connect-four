import React, {Component} from "react";


class LeaderBoardContainer extends Component {
  render() {
    return (
      <div className = "leaderBoard">
        <ul className = "">
          <p>Rank</p>
          <p>Name</p>
          <p>Number of Moves to Win</p>
          <p>Opponent</p>
        </ul>
      </div>
    )
  }
}

export default LeaderBoardContainer