export default function planReducer(state = { plans: [] }, action){

    switch (action.type) {
        case 'FETCH_PLANS':
            return {
                plans: action.payload
            }
        case 'ADD_PLAN':
            return {
                ...state,
                plans: [...state.plans, action.payload]
            }
        default:
            return state
    }
    
    
}