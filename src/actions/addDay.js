export const addDay = (day, planId) => {

    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/plans/${planId}/days`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(day)
        })
        .then(response => response.json())
        .then(plan => dispatch({type: 'ADD_DAY', payload: plan}))
    }

}