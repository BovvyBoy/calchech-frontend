import React from 'react';
import DayInput from '../components/DayInput';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDay } from '../actions/deleteDay';

const Days = (props) => {
	const handleDelete = (day) => {
		props.deleteDay(day.id, day.plan_id);
	};
	console.log(props);
	return (
		<div>
			<h4>Days</h4>
			{props.days &&
				props.days.map((day) => (
					<li key={day.id}>
						<Link to={`/plans/${day.plan_id}/days/${day.id}`}>{day.name}</Link>
						<button onClick={() => handleDelete(day)}>Delete</button>
					</li>
				))}
			<DayInput plan={props.plan} />
		</div>

		// <div>
		// 	<h4>Days</h4>
		// 	{props.days &&
		// 		props.days.map((day) => (
		// 			<li key={day.id}>
		// 				{day.name} <button onClick={() => handleDelete(day)}>Delete</button>
		// 				{/* {day.meals.map(meal => <li>{meal.name}</li>)} */}
		// 			</li>
		// 		))}
		// </div>
	);
};

export default connect(null, { deleteDay })(Days);
