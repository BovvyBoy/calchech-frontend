export const deleteDay = (dayId, planId) => {
	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/plans/${planId}/days/${dayId}`, {
			method: 'DELETE'
		})
			.then((response) => response.json())
			.then((plan) => dispatch({ type: 'DELETE_DAY', payload: plan }));
	};
};
