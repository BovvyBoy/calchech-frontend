import React from 'react';
// import {Redirect} from 'react-router-dom'
import DaysContainer from '../containers/DaysContainer';

const Plan = (props) => {
	// let plan = props.plans[props.match.params.id - 1]
	let plan = props.plans.filter((plan) => plan.id == props.match.params.id)[0];
	console.log(plan);
	return (
		<div>
			{/* {plan ? null : <Redirect to='/plans' />} */}
			<h3>Plan: {plan ? plan.name : null}</h3>
			{/* <p>{plan ? plan.days.length : null} day(s)</p> */}
			<DaysContainer plan={plan} />
		</div>
	);
};

export default Plan;
