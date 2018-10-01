import React, { Component } from 'react'

class Badge extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <span className={"badge m-2 badge-" + (context.state.count === 0 ? "warning" : "primary")}>
                { context.state.count === 0 ? "Zero" : context.state.count }
                </span>
            </React.Fragment>
        )
    }
}
 
export default Badge
