import React, {Component} from 'react';
import {connect} from 'react-redux';

export class CheeseList extends Component {
    constructor(props) {
      super(props)
      this.state={
          cheeses: []
      }
  }
  render() { 
      console.log(this.props)
    const cheese= this.props.cheeseList.map((value, index) => 
        <li key={index}>{value}</li>)
    return (
        <div>
            <ul>
            {cheese} 
            </ul>
        </div>
  )}
}

const mapStateToProps = state => ({ cheeses: state.cheeses})
export default connect (mapStateToProps)(CheeseList);


//doesn't have life cycle method for stateless