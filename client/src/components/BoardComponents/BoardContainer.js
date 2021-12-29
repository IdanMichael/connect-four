import React, {Component} from "react";
import GridComponent from "./GridComponent";
import checkWinner from "../../helper-functions/checkWinner";
import {connect} from 'react-redux';
import ToLeaderBoard from "./ToLeaderBoard";
import ToMatchHistory from "./ToMatchHistroy";
import postToServer from "../../helper-functions/postToServer";
import impossibleBot from "../../helper-functions/impossibleBot";
import { dropTile } from '../../actions.js'
// import easyBot from "../../helper-functions/easybot";


const mapDispatchToProps = dispatch =>(
  {
    dropTile: (col) => dispatch(dropTile(col))
  }
)
const mapStateToProps = state => (
  {
    board: state.board,
    turns: state.turnsPlayed,
    isRedTurn: state.isRedTurn
  }
)
class BoardContainer extends Component {
  async componentDidUpdate (){
    let copyOfBoard = []
    for(let arr of this.props.board){
      copyOfBoard.push(arr.slice())
    }
    if(checkWinner(copyOfBoard)){
      let redPlayer = document.getElementById('redPlayerName').value
      let yellowPlayer = document.getElementById('yellowPlayerName').value

      if(redPlayer === ''){ redPlayer = 'guest'}
      if(yellowPlayer === ''){ yellowPlayer = 'guest'}
      
      const winner = this.props.isRedTurn ? 'yellow' : 'red'
      postToServer(redPlayer, yellowPlayer, this.props.turns, winner)
      alert('winner')
    }
    if(!this.props.isRedTurn){
      copyOfBoard = []
      for(let arr of this.props.board){
        copyOfBoard.push(arr.slice())
      }
      const col = await impossibleBot(copyOfBoard)

      this.props.dropTile(col)
    }
  
  }
  render() {
    const grid = [];
    for(let y = 6; y >= 0; y--){
      const row = [];
      for(let x = 0; x < 7; x++){
        row.push(<GridComponent x = {x} y = {y} key = {x}></GridComponent>)
      }
      grid.push(<div className = "row" key = {y}>{row}</div>)
    }
    return(
      <div className = "BoardContainer">
        <input type = 'text' id = 'redPlayerName'></input>
        <input type = 'text' id = 'yellowPlayerName'></input>
        {grid}
        <ToLeaderBoard></ToLeaderBoard>
        <ToMatchHistory></ToMatchHistory>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BoardContainer);