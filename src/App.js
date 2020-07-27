import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App
