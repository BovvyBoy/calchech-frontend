export function fetchDays(planId) {
	return (dispatch) => {
		fetch(`http://localhost:3000/api/v1/plans/${planId}/days`).then((response) => response.json()).then((days) =>
			dispatch({
				type: 'FETCH_DAYS',
				payload: days
			})
		);
	};
}
