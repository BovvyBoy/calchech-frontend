import React from 'react';
import MealsContainer from '../containers/MealsContainer';

const Day = (props) => {
	let day = props.days.filter((day) => day.id == props.match.params.id)[0];
	console.log(day, 'HI');
	return (
		<div>
			<h3>Day: {day ? day.name : null}</h3>
			<MealsContainer rprops={props.match} day={day} />
		</div>
	);
};

export default Day;
