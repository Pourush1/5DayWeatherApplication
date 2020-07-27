import React from 'react'
import moment from 'moment'
import { fetchData } from '../../api'
import WeatherCard from '../WeatherCard/WeatherCard'
import { DATE_FORMAT } from '../../utils/constants'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

class DayWeather extends React.Component {
  constructor() {
    super()
    this.state = {
      userPosition: {
        latitude: 1,
        longitude: 1,
      },
      dayWeatherCollection: [],
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
        const dayKeyMap = this.createMap(fetchedData)
        const { day } = this.props
        const clickedDayWeather = dayKeyMap.get(day)
        this.setState({ dayWeatherCollection: clickedDayWeather })
      })
    }
  }

  createMap = (fetchedData) => {
    const mappedData = new Map()
    fetchedData.forEach((data) => {
      const newDate = new Date()
      const weekday = data.dt * 1000
      newDate.setTime(weekday)
      const day = moment(newDate).format(DATE_FORMAT)
      if (!mappedData.has(day)) {
        mappedData.set(day, [])
      }
      const value = mappedData.get(day)
      value.push(data)
    })
    return mappedData
  }

  render() {
    const { dayWeatherCollection } = this.state
    const { day } = this.props
    return (
      <>
        {dayWeatherCollection ? (
          <div>
            <h1 className="row justify-content-center">{day}</h1>
            <div className="row justify-content-center">
              {dayWeatherCollection.map((item, index) => (
                <WeatherCard key={index} item={item} showDay={false} />
              ))}
            </div>
          </div>
        ) : (
          <NotFoundPage />
        )}
      </>
    )
  }
}

export default DayWeather
