export const addMealToDay = (planId, dayId, meal) => {
	return (dispatch) => {
		fetch(`http://localhost:3000/api/v1/plans/${planId}/days/${dayId}/meals`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meal)
		})
			.then((response) => response.json())
			.then((day) => dispatch({ type: 'ADD_MEAL_TO_DAY', payload: day }));
	};
};
