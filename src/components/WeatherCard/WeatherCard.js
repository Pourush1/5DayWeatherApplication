import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { DATE_FORMAT, DAY_FORMAT } from '../../utils/constants'

const WeatherCard = (props) => {
  const { item, history, match, showDay } = props
  const cardDate = new Date()
  const weekday = item.dt * 1000
  cardDate.setTime(weekday)
  const imgURL = `owf owf-${item?.weather && item.weather[0]?.id} owf-5x`
  const kelvinTemp = item && item.main && item.main.temp
  const fahrenheitTemp = 1.8 * (kelvinTemp - 273) + 32

  return (
    <div className="col-md-2">
      <div className="card text-center">
        {showDay && (
          <h3 className="card-title">{moment(cardDate).format(DATE_FORMAT)}</h3>
        )}
        <p className="text-muted">{moment(cardDate).format(DAY_FORMAT)}</p>
        <i className={imgURL} />
        {fahrenheitTemp && <h2>{Math.round(fahrenheitTemp)} °F</h2>}
        <div className="card-body">
          <p className="card-text">
            {item?.weather && item.weather[0]?.description}
          </p>
          {showDay && (
            <button
              className="btn btn-link"
              onClick={() =>
                history.push(
                  `${match.url}${moment(cardDate).format(DATE_FORMAT)}`
                )
              }
            >
              View Hourly Forecast
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(WeatherCard)
