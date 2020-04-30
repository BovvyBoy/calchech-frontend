export function fetchMeals() {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/meals').then((response) => response.json()).then((meals) =>
			dispatch({
				type: 'FETCH_MEALS',
				payload: meals
			})
		);
	};
}
