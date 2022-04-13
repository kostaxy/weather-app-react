import React from 'react'
import { getIconSrcByCode } from '../../UI/icons/weather/WeatherIcon'
import classes from './ForecastWeatherItem.module.css'

const ForecastWeatherItem = ({ response, isCelsius, day }) => {

    let API_DATA = {}
    response !== null
        ?
        API_DATA = {
            iconUrl: getIconSrcByCode(response.data.forecast.forecastday[day].day.condition.code, 1),
            minTempC: response.data.forecast.forecastday[day].day.mintemp_c.toFixed(),
            minTempF: response.data.forecast.forecastday[day].day.mintemp_f.toFixed(),
            maxTempC: response.data.forecast.forecastday[day].day.maxtemp_c.toFixed(),
            maxTempF: response.data.forecast.forecastday[day].day.maxtemp_f.toFixed(),
            date:
                ('0' + new Date(response.data.forecast.forecastday[day].date).getDate()).slice(-2)
                + '.' +
                ('0' + (new Date(response.data.forecast.forecastday[day].date).getMonth() + 1)).slice(-2),
        }
        :
        API_DATA = {}

    return (
        <div className={classes.Weather_forecast}>
            <div>
                <img
                    className={classes.Forecast_icon}
                    src={API_DATA.iconUrl}
                    alt='icon'
                ></img>
            </div>
            <div className={classes.Forecast_temp}>{
                isCelsius
                    ?
                    `${API_DATA.minTempC}° / ${API_DATA.maxTempC}°`
                    :
                    `${API_DATA.minTempF}° / ${API_DATA.maxTempF}°`
            }
            </div>
            <div className={classes.Forecast_date}>
                {API_DATA.date}
            </div>
        </div>
    )
}

export default ForecastWeatherItem