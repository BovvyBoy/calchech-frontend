import React from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions/fetchMeals';
// import { addMealToDay } from '../actions/addMealToDay';
// import { bindActionCreators } from 'redux';

export class DayMealInput extends React.Component {
	// componentDidMount() {
	// 	this.props.fetchMeals();
	// }

	state = {
		meals: ''
	};

	render() {
		console.log(this.props, 'DAY MEAL INPUT');
		return (
			<div>
				<form>
					<h4>New Meal</h4>
					<label>Add Meal</label>
					<select name="name" onChange={this.handleOnChange}>
						{this.state.meals.map((meal) => <option key={meal.id}>{meal.name}</option>)}
					</select>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		meals: state.meals
// 	};
// };

// const mapDispatchToProps = () =>
// 	bindActionCreators({
// 		...fetchMeals,
// 		...addMealToDay
// 	});

export default connect(null, { fetchMeals })(DayMealInput);
