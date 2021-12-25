import React, {Component} from "react";
import {connect} from 'react-redux';
import { dropTile } from '../../actions.js'
const mapDispatchToProps = dispatch =>(
  {
    dropTile: (col) => dispatch(dropTile(col))
  }
)
const mapStateToProps = state => (
  {
    board: state.board
  }
)

class GridComponent extends Component {



  handleClick(col){
    this.props.dropTile(col);
  }
  render() {
    const board = this.props.board
    const x = this.props.x
    const y = this.props.y
    let clss = 'GridComponent';
    const thisPiece = board[x][y];

    if(thisPiece){
      if(thisPiece === 'red'){
        clss += ' red'
      }else {
        clss += ' yellow'
      }
    }
    return(
      <div className = {clss} onClick = {() => this.handleClick(this.props.x)}>
        <p>{this.props.x}, {this.props.y}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (GridComponent);