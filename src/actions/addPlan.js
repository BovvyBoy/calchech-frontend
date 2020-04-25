export const addPlan = (data) => {
    return (dispatch)  => {
        fetch('http://localhost:3000/api/v1/plans', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(plan => dispatch({
            type: 'ADD_PLAN',
            payload: plan
        }))
    }

}