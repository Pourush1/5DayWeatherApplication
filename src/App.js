import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import DayWeather from './components/DayWeather/DayWeather'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:day" component={DayWeather} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App
