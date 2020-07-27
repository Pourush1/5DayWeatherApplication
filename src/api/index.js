import axios from 'axios'
import apiKey from './apiKey'
import { BASE_URL } from '../utils/constants'

export const fetchData = async ({ latitude, longitude }) => {
  const fiveDayWeatherUrl = `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey.apiKey}`
  try {
    const apiResponseFiveDay = await axios.get(fiveDayWeatherUrl)
    const collectionFiveDayWeather = apiResponseFiveDay.data.list
    return collectionFiveDayWeather
  } catch (error) {
    console.log(error)
  }
  return false
}

export const fetchCurrentLocationData = async ({ latitude, longitude }) => {
  const url = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey.apiKey}`
  try {
    const apiResponseCurrent = await axios.get(url)
    return apiResponseCurrent
  } catch (error) {
    console.log(error)
  }
  return false
}
