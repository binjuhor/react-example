import React, { Component } from 'react'
import Counter from './counter'

export const CounterContext = React.createContext()

class CounterProvider extends Component {
    state = { 
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 5 },
            { id: 5, value: 9 },
            { id: 6, value: 0 }
        ]
    }

    handleIncrement( current_counter ) {

    	this.setState(prev_state => {
		    return {
		    	counters: prev_state.counters.map( counter => {
		    		if( counter.id === current_counter.id ) {
		    			counter.value+= 1
				    }
				    return counter
			    })
		    }
	    })
    }

    render() { 
        return ( 
            <CounterContext.Provider value={
	            {
	            	counters: this.state.counters,

		            increment: this.handleIncrement.bind( this )
            }
            }>
	            { this.props.children }
            </CounterContext.Provider>
         )
    }
}

class Counters extends Component {
	render() {
		return (
			<CounterProvider>
				<Counter />
			</CounterProvider>
		)
	}
}
 
export default Counters;