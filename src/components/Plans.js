import React from 'react';
import { Link } from 'react-router-dom';

const Plans = (props) => {
	return (
		<div>
			<h2>Plans</h2>
			<div>
				{props.plans.map((plan) => (
					<li key={plan.id}>
						<Link to={`/plans/${plan.id}`}>{plan.name}</Link>
					</li>
				))}
			</div>
			<Link to={'/plans/new'}>New Plan</Link>
		</div>
	);
};

export default Plans;
