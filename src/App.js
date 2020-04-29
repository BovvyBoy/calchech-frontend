import React from 'react';
import './App.css';
// import { connect } from 'react-redux'

import PlansContainer from './containers/PlansContainer';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>CalChech Calorie Counter</h1>
				<PlansContainer />
			</div>
		);
	}
}

export default App;
