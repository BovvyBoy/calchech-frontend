import React from 'react';
// import MealsContainer from '../containers/MealsContainer';

const Day = (props) => {
	let day = props.days.filter((day) => day.id == props.match.params.id)[0];
	console.log(day, 'HI');
	return (
		<div>
			<h3>{day ? day.name : null}</h3>
			{/* <MealsContainer day={day} /> */}
			{day.meals &&
				day.meals.map((meal) => (
					<ul key={meal.id}>
						<li>{meal.name}</li>
						<li>{meal.dish}</li>
						<li>{meal.dish_type}</li>
						<li>{meal.origin}</li>
						<li>{meal.cuisine}</li>
						<li>{meal.diet}</li>
						<li>{meal.description}</li>
						<li>{meal.calories}</li>
					</ul>
				))}
		</div>
	);
};

export default Day;
