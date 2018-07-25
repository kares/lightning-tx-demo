import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './routes/not-found'
import OneDirectionPaymentChannel from './routes/one-direction-payment-channels'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={OneDirectionPaymentChannel} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
