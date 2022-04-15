import React from 'react'
import ForecastWeatherItem from '../ForecastWeatherItem/ForecastWeatherItem'
import classes from './ForecastWeather.module.css'

const ForecastWeather = ({response}) => {
    return (
        <div className={classes.Weather_forecast_container}>
            <ForecastWeatherItem response={response} day={1} />
            <ForecastWeatherItem response={response} day={2} />
        </div>
    )
}

export default ForecastWeather