import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../API/weatherApi'
import classes from './Weather.module.css'
import { getIconSrcByCode } from '../../UI/icons/weather/WeatherIcon'
import ChooserDegrees from '../../components/ChooserDegrees/ChooserDegrees'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import ForecastWeather from '../../components/ForecastWeather/ForecastWeather'
import { useSelector } from 'react-redux'
import InputCity from '../../components/InputCity/InputCity'
import { isCityNameСorrect } from '../../functions/isCityNameCorrect'
import WeatherDataNoInfo from '../../components/WeatherDataNoInfo/WeatherDataNoInfo'


const Weather = () => {

    const city = useSelector(state => state.cityReducer.city)

    // const [isCelsius, setIsCelsius] = useState(true)   

    const [response, setResponse] = useState(null)

    useEffect(() => {
        let cancel
        axios
            .get(API.base, {
                params: {
                    key: API.key,
                    q: city,
                    days: 5,
                    aqi: 'no',
                    alerts: 'no'
                },
                cancelToken: new axios.CancelToken((c) => cancel = c)
            })
            .then((response) => {
                return setResponse(response)
            })
            .catch((e) => {
                setResponse(null)
                // if (axios.isCancel(e)) {
                //     return console.log("e", e)
                // }
            })

        return () => {
            if (cancel) {
                cancel()
            }
        }
    }, [city])


    // async function fetchWeather(city) {
    //     const response = await axios.get(API.base, {
    //         params: {
    //             key: API.key,
    //             q: city,
    //             days: 5,
    //             aqi: 'no',
    //             alerts: 'no'
    //         }
    //     })
    //     return response
    // }


    

    let API_DATA = {}
    response !== null ?
        API_DATA = {
            cityName: response.data.location.name,
            current: {
                // iconUrl: 'https:' + response.data.current.condition.icon.replace("64x64", "128x128"),
                iconUrl: getIconSrcByCode(response.data.current.condition.code,
                    response.data.current.is_day),
                condition: response.data.current.condition.text,
                windKph: response.data.current.wind_kph.toFixed(),
                windMph: response.data.current.wind_mph.toFixed(),
                humidity: response.data.current.humidity,
                tempC: response.data.current.temp_c.toFixed(),
                tempF: response.data.current.temp_f.toFixed(),
                cloud: response.data.current.cloud,
            },
        }
        : API_DATA = {}

    return (
        <div>
            <div className={classes.Weather__container}>

                <InputCity response={response} API_DATA={API_DATA}></InputCity>

                {
                    isCityNameСorrect(response, API_DATA, city)
                        ?
                        <div className={classes.Weather_data_container}>
                            <CurrentWeather API_DATA={API_DATA}/>
                            <ForecastWeather response={response} />
                            <ChooserDegrees></ChooserDegrees>
                        </div>
                        :
                        <div className={classes.Weather_data_container}>
                            <WeatherDataNoInfo/>
                        </div>
                }
            </div>

        </div>
    )
}

export default Weather