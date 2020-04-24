import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {fetchPlans} from './actions/fetchPlans'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/plans')
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render(){
    return (
      <div className="App">
        App
      </div>
    );

  }

  // mapStateToProps = (state) => {
  //   return {
  //     plans: state.accounts
  //   }
  // }
}

export default connect( null, { fetchPlans })(App);
