import React from 'react'
import {Route, Link} from 'react-router-dom'


const Plans = (props) => {
    
    return(
        <div>
            <h2>Plans</h2>
            <div>
                {props.plans.map(plan => 
                    <li key={plan.id}>
                        <Link to={`/plans/${plan.id}`}>{plan.name}</Link> 
                    </li>
                )}
            </div>
        </div>
    )

}

export default Plans