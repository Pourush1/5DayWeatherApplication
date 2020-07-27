import React from 'react'
import { fetchData } from '../../api'
import WeatherCard from '../WeatherCard/WeatherCard'

class WeatherList extends React.Component {
  constructor() {
    super()

    this.state = {
      userPosition: {
        latitude: 1,
        longitude: 1,
      },
      weatherCollection: [],
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
        const { userPosition } = this.state
        const fetchedData = await fetchData(userPosition)

        const filterFetchedData = fetchedData.filter((element) =>
          element.dt_txt.includes('15:00:00')
        )

        this.setState({ weatherCollection: filterFetchedData })
      })
    }
  }

  render() {
    const { weatherCollection } = this.state
    return (
      <div className="row justify-content-center">
        {weatherCollection.map((item, index) => {
          return <WeatherCard key={index} item={item} showDay />
        })}
      </div>
    )
  }
}

export default WeatherList
