import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';


class CheeseList extends Component {

  componentDidMount() {
      this.props.dispatch(fetchCheeses());
  }

  render() { 


    const cheese = this.props.cheeses.map((value, index) => 
        <li key={index}>{value}</li>)

    return (
        <div>
            <ul>
                {cheese}
            </ul>
        </div>
  )}
}



const mapStateToProps = (state, props) => {
    console.log(state);
    console.log(props);
    return { cheeses: state.cheeses};
} 

export default connect (mapStateToProps)(CheeseList);




//doesn't have life cycle method for stateless

// import {connect} from 'react-redux';  
// import {bindActionCreators} from 'redux';  
// import * as instructorActions from '../../actions/instructorActions';  
// import StudentList from '../studentList';

// class StudentsContainer extends React.Component {  
//   componentDidMount() {
//     if (this.props.students.length = = 0) {
//       this.props.actions.fetchStudents();
//     }

//   }

//   render() {
//     return ( 
//       < div className="col-lg-4">
//         < h2>Students< /h2>
//         < StudentList 
//           students={this.props.students}/>
//       < /div>

//     )
//   }
// }

// function mapStateToProps(state) {  
//   return {students: state.students}
// }

// function mapDispatchToProps(dispatch) {  
//   return {actions: bindActionCreators(instructorActions, dispatch)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer);