import React from 'react'
import { connect } from 'react-redux'
import {addPlan} from '../actions/addPlan'

export class PlansInput extends React.Component {

    state = {
        name: '', 
        duration: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            duration: 0
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlan(this.state)
        this.setState({
            name: '', 
            duration: ''
        })
    }

    render() {
        return (
            <div>
                <h2>New Plan</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Plan Name </label>
                    <input type="text" placeholder="Plan Name" value={this.state.name} name="name" onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addPlan})(PlansInput)
