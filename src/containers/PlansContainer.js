import React from 'react'
import { connect } from 'react-redux'
import { fetchPlans } from '../actions/fetchPlans'

import Plans from '../components/Plans'
import PlansInput from '../components/PlansInput'

class PlansContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPlans()
    }

    render() {
        return (
            <div>
                Plans Container
                <PlansInput />
                <Plans plans={this.props.plans}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.plans
    }
}

// const mapDispatchToProps = () => {
        
// }

export default connect(mapStateToProps, { fetchPlans })(PlansContainer)
