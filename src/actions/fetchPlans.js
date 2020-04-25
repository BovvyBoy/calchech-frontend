export function fetchPlans(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/plans')
        .then(response => response.json())
        .then(plans => dispatch({
            type: 'FETCH_PLANS',
            payload: plans
        }))
    }
}