import React from 'react'
import { fetchCurrentLocationData } from '../../api'
import WeatherCard from '../WeatherCard/WeatherCard'

class CurrentCityWeather extends React.Component {
  constructor() {
    super()
    this.state = {
      userPosition: {
        latitude: 1,
        longitude: 1,
      },
      currentCityWeather: {},
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }

        this.setState({ userPosition: pos })
        const userLocationApiResponse = await fetchCurrentLocationData(
          this.state.userPosition
        )
        this.setState({ currentCityWeather: userLocationApiResponse.data })
      })
    }
  }

  render() {
    const { currentCityWeather } = this.state
    return (
      <div className="row justify-content-center">
        <WeatherCard item={currentCityWeather} showDay />
      </div>
    )
  }
}

export default CurrentCityWeather
