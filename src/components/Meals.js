import React from 'react';
import { connect } from 'react-redux';
import { deleteDayMeal } from '../actions/deleteDayMeal';

const Meals = (props) => {
	const handleDelete = (meal) => {
		let planId = props.rprops.params.plan_id;
		let dayId = props.rprops.params.id;
		props.deleteDayMeal(planId, dayId, meal.id);
	};
	console.log(props, 'IM HERE IN MEALS');
	return (
		<div>
			{props.meals &&
				props.meals.map((meal) => (
					<ul key={meal.id}>
						<li>
							<h3>{meal.dish}</h3>
							<h4>{meal.name}</h4>
							<p>Calories:{meal.calories}</p>
							<button onClick={() => handleDelete(meal)}>Delete</button>
						</li>
						{/* 
                    <li>{meal.dish_type}</li>
                    <li>{meal.origin}</li>
                    <li>{meal.cuisine}</li>
                    <li>{meal.diet}</li>
                    <li>{meal.description}</li> */}
					</ul>
				))}
		</div>
	);
};

export default connect(null, { deleteDayMeal })(Meals);
