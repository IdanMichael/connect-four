import React, {Component} from "react";
import GridComponent from "./GridComponent";
import checkWinner from "../helper-functions/checkWinner";
import {connect} from 'react-redux';

const mapStateToProps = state => (
  {
    board: state.board
  }
)
class BoardContainer extends Component {
  componentDidUpdate(){
    let copyOfBoard = []
    for(let arr of this.props.board){
      copyOfBoard.push(arr.slice())
    }
    if(checkWinner(copyOfBoard)){alert('winner')}
  }
  render() {
    const grid = [];
    for(let y = 5; y >= 0; y--){
      const row = [];
      for(let x = 0; x < 7; x++){
        row.push(<GridComponent x = {x} y = {y} key = {x}></GridComponent>)
      }
      grid.push(<div className = "row" key = {y}>{row}</div>)
    }
    return(
      <div className = "BoardContainer">
        {grid}
      </div>
    )
  }
}

export default connect(mapStateToProps, null) (BoardContainer);