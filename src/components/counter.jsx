import React, { Component } from 'react'
import { CounterContext } from './counters'
import Badge from './badge'

// const Badge = ( { count } ) =>  (
// 	<span className={ "badge m-2 badge-" + (count === 0 ? "warning" : "primary") }>{ count === 0 ? "Zero" : count }</span>
// )

class Counter  extends Component {

    render() {
        return (
        	<CounterContext.Consumer>
		        { value => {
		        	const { counters, increment } = value

			        return counters.map( counter => {
			        	return (
					        <div key={ counter.id }>
						        <Badge count={ counter.value } />
						        <button onClick={ increment.bind( this, counter ) } className="btn btn-secondary btn-sm">Increment</button>
					        </div>
				        )
			        })
		        }}
	        </CounterContext.Consumer>
        )
    }
}

export default Counter