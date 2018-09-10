import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
import Counter from './components/counters'
ReactDOM.render(<Counter />, document.getElementById('root'))
registerServiceWorker()
