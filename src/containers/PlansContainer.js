import React from 'react'
import { connect } from 'react-redux'
import { fetchPlans } from '../actions/fetchPlans'
import {Route, Switch} from 'react-router-dom'

import Plans from '../components/Plans'
import Plan from '../components/Plan'
import PlansInput from '../components/PlansInput'

class PlansContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPlans()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/plans/new' component={PlansInput}/>
                    {/* <PlansInput /> */}
                    <Route path='/plans/:id' render={(routerProps) => <Plan {...routerProps} plans={this.props.plans} />} />
                    {/* <Plan /> */}
                    <Route exact path='/plans' render={(routerProps) => <Plans {...routerProps} plans={this.props.plans} />} />
                    {/* <Plans plans={this.props.plans}/> */}
                </Switch>
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
