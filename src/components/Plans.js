import React from 'react'

const Plans = (props) => {
    
    return(
        <ul>
            <h2>Plans</h2>
            {props.plans.map(plan => 
                <li key={plan.id}>{plan.name} - {plan.duration} day(s)</li>
            )}
        </ul>
    )

}

export default Plans