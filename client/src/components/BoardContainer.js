import React, {Component} from "react";
import GridComponent from "./GridComponent";

class BoardContainer extends Component {
  render() {
    const grid = [];
    for(let y = 5; y >= 0; y--){
      const row = [];
      for(let x = 0; x < 6; x++){
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

export default BoardContainer;