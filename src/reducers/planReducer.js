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
				plans: state.plans.map((plan) => {
					if (plan.id === action.payload.id) {
						return action.payload;
					} else {
						return plan;
					}
				})
			};
		default:
			return state;
	}
}
