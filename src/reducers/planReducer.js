export default function planReducer(state = { plans: [] }, action) {
	switch (action.type) {
		case 'FETCH_PLANS':
			return {
				plans: action.payload
			};
		case 'ADD_PLAN':
			return {
				...state,
				plans: [ ...state.plans, action.payload ]
			};
		case 'ADD_DAY':
			return {
				...state,
				plans: state.plans.map((plan) => (plan.id === action.payload.id ? action.payload : plan))
			};
		case 'DELETE_DAY':
			return {
				...state,
				plans: state.plans.map((plan) => (plan.id === action.payload.id ? action.payload : plan))
			};
		case 'FETCH_DAYS':
			return {
				...state,
				days: action.payload
			};
		case 'DELETE_DAY_MEAL':
			return {
				...state,
				days: state.days.map((day) => (day.id === action.payload.id ? action.payload : day))
			};
		default:
			return state;
	}
}
