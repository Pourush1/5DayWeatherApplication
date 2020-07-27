import React from 'react'
import CurrentCityWeather from '../../components/CurrentCityWeather/CurrentCityWeather'
import WeatherList from '../../components/WeatherList/WeatherList'

const HomePage = () => {
  return (
    <>
      <CurrentCityWeather />
      <WeatherList />
    </>
  )
}

export default HomePage
