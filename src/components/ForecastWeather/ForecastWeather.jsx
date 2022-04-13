import React from 'react'
import ForecastWeatherItem from '../ForecastWeatherItem/ForecastWeatherItem'
import classes from './ForecastWeather.module.css'

const ForecastWeather = ({response, isCelsius}) => {
    return (
        <div className={classes.Weather_forecast_container}>
            <ForecastWeatherItem response={response} isCelsius={isCelsius} day={1} />
            <ForecastWeatherItem response={response} isCelsius={isCelsius} day={2} />
        </div>
    )
}

export default ForecastWeather