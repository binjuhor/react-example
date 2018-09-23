import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
import Counters from './components/counters'
ReactDOM.render(<Counters />, document.getElementById('root'))
registerServiceWorker()
