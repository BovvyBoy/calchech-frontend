import React from 'react'
import { connect } from 'react-redux'

const Days = (props) => {
    return (
        <div>
            <h4>Days</h4>
            {props.days && props.days.map(day =>
              <li key={day.id}>{day.name}
                {/* {day.meals.map(meal => <li>{meal.name}</li>)} */}
              </li>    
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Days)
