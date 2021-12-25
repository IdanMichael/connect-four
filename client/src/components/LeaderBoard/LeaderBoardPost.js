import React, {Component} from "react";


class LeaderBoardPost extends Component {
  render() {
    return (
      <div className = "leaderBoard">
        <ul className = "leaderBoardHeader">
          <p>{this.props.rank}</p>
          <p>{this.props.name}</p>
          <p>{this.props.moves}</p>
          <p>{this.props.opponentName}</p>
        </ul>
      </div>
    )
  }
}

export default LeaderBoardPost