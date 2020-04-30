export const deleteDayMeal = (planId, dayId, mealId) => {
	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/plans/${planId}/days/${dayId}/meals/${mealId}`, {
			method: 'DELETE'
		})
			.then((response) => response.json())
			.then((day) => dispatch({ type: 'DELETE_DAY_MEAL', payload: day }));
	};
};
