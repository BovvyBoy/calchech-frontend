export default function planReducer(state = { plans: [] }, action){

    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {
                plans: action.payload
            }
           
        default:
            return state
    }
    
    
}