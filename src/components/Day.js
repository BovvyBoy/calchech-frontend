import React from 'react';
import MealsContainer from '../containers/MealsContainer';
import { DayMealInput } from './DayMealInput';

const Day = (props) => {
	let day = props.days.filter((day) => day.id == props.match.params.id)[0];
	console.log(day, 'HI');

	// const addMeal = (day) => {
	// 	if (day.meals < 3) {
	// 		return <button>Add Meal</button>;
	// 	} else {
	// 		return <p>Delete</p>;
	// 	}
	// };

	// const handleAddMealToDay = () => {
	// 	return <DayMealInput />;
	// };

	return (
		<div>
			<h3>Day: {day ? day.name : null}</h3>
			<MealsContainer rprops={props.match.params} day={day} />
			<DayMealInput day={day} />
			{/* <button onClick={handleAddMealToDay()}>Add Meal</button> */}
		</div>
	);
};

export default Day;
