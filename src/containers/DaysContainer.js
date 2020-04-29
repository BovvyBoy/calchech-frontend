import React from 'react';
// import DayInput from '../components/DayInput';
import Days from '../components/Days';
import Day from '../components/Day';
import { connect } from 'react-redux';
import { fetchDays } from '../actions/fetchDays';
import { Route, Switch } from 'react-router-dom';

class DaysContainer extends React.Component {
	componentDidMount() {
		this.props.fetchDays(this.props.plan.id);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route
						path="/plans/:plan_id/days/:id"
						render={(routerProps) => <Day {...routerProps} days={this.props.days} />}
					/>
					<Route
						path="/plans/:id"
						render={(routerProps) => (
							<Days {...routerProps} days={this.props.plan && this.props.plan.days} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		days: state.days
	};
};

export default connect(mapStateToProps, { fetchDays })(DaysContainer);
