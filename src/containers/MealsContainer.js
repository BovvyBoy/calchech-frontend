import React from 'react';
import { Route } from 'react-router-dom';

import Meals from '../components/Meals';

export class MealsContainer extends React.Component {
	render() {
		return (
			<div>
				<Meals rprops={this.props.rprops} meals={this.props.day && this.props.day.meals} />
			</div>
		);
	}
}

export default MealsContainer;
