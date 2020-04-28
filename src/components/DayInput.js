import React from 'react'
import { connect } from 'react-redux'
import { addDay } from '../actions/addDay'

export class DayInput extends React.Component {

    state = {
        name: '',
        target_calories: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDay(this.state, this.props.plan.id)
        this.setState({
            name: '',
            target_calories: ''
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>New Day</h4>
                    <label>Day Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange} />
                    <label>Target Calories</label>
                    <input type='number' name='target_calories' value={this.state.target_calories} onChange={this.handleOnChange} />
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addDay })(DayInput)
