import React from 'react'
// import {Redirect} from 'react-router-dom'

const Plan = (props) => {
    let plan = props.plans[props.match.params.id - 1]

    return (
        <div>
            {/* {plan ? null : <Redirect to='/plans' />} */}
            <h4>{plan ? plan.name : null}</h4> <p>{plan ? plan.duration : null} day(s)</p>
        </div>
    )
    
}

export default Plan