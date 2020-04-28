import React from 'react'
import DayInput from '../components/DayInput'
import Days from '../components/Days'

class DaysContainer extends React.Component {
    render() {
        return (
            <div>
                <DayInput plan={this.props.plan}/>
                <Days days={this.props.plan && this.props.plan.days} />
            </div>
        )
    }
}

export default DaysContainer
