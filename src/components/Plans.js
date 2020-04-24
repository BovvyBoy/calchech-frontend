import React from 'react'

const Plans = (props) => {
    
    return(
        <ul>
            <h1>Plans</h1>
            {props.plans.map(plan => 
                <li key={plan.id}>{plan.name} - {plan.duration}</li>
            )}
        </ul>
    )

}

export default Plans