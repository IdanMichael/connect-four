import React, {Component} from 'react';
// 

class Comp extends Component {
  constructor(){
    super();
    this.state = {
      customers:[]
    }
  }
  componentDidMount(){
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({'customers': customers}))
      
  }
    render(){
    return(
      
      <div>
        <h2>Component</h2>
        
      </div>
    )
  }
}

export default Comp;