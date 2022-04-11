import axios from 'axios'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { API } from '../../API/weatherApi'
import classes from './Weather.module.css'
import exampleJson from '../../API/example.json'


const Weather = () => {

    const [city, setCity] = useState('');
    const [isCelsius, setIsCelsius] = useState(true)
    const [response, setResponse] = useState(exampleJson)
    console.log(response)
    // const [response, setResponse] = useState(null)

    // useEffect(() => {
    //     let cancel
    //     axios
    //         .get(API.base, {
    //             params: {
    //                 key: API.key,
    //                 q: city,
    //                 days: 5,
    //                 aqi: 'no',
    //                 alerts: 'no'
    //             },
    //             cancelToken: new axios.CancelToken((c) => cancel = c)
    //         })
    //         .then((response) => {
    //             return setResponse(response)
    //         })
    //         .catch((e) => {
    //             setResponse(null)
    //             if (axios.isCancel(e)) {
    //                 return console.log("e", e)
    //             }
    //         })

    //     return () => {
    //         if (cancel) {
    //             cancel()
    //         }
    //     }
    // }, [city])


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


    function handleChange(event) {
        setCity(event.target.value)
    }

    const showTestResponse = () => {
        console.log(response)
    }

    let API_DATA = {}
    response !== null ?
        API_DATA = {
            cityName: response.data.location.name,
            current: {
                iconUrl: 'https:' + response.data.current.condition.icon,
                condition: response.data.current.condition.text,
                windKph: response.data.current.wind_kph,
                windMph: response.data.current.wind_mph,
                humidity: response.data.current.humidity,
                tempC: response.data.current.temp_c,
                tempF: response.data.current.temp_f,
                chanceOfRain: response.data.forecast.forecastday[0].day.daily_chance_of_rain,
            },
            tomorrow: {
                iconUrl: response.data.forecast.forecastday[1].day.condition.icon,
                minTempC: response.data.forecast.forecastday[1].day.mintemp_c,
                minTempF: response.data.forecast.forecastday[1].day.mintemp_f,
                maxTempC: response.data.forecast.forecastday[1].day.maxtemp_c,
                maxTempF: response.data.forecast.forecastday[1].day.maxtemp_f,
                date: response.data.forecast.forecastday[1].date,
            },
            afterTomorrow: {
                iconUrl: response.data.forecast.forecastday[2].day.condition.icon,
                minTempC: response.data.forecast.forecastday[2].day.mintemp_c,
                minTempF: response.data.forecast.forecastday[2].day.mintemp_f,
                maxTempC: response.data.forecast.forecastday[2].day.maxtemp_c,
                maxTempF: response.data.forecast.forecastday[2].day.maxtemp_f,
                date: response.data.forecast.forecastday[2].date,
            }
        }
        : API_DATA = {}

    return (
        <div>

            <button onClick={showTestResponse}>check response</button>
            <div className={classes.Weather__container}>

                <div className={classes.Weather_input}>

                    <span>Right now in </span>
                    <input type='text' onChange={handleChange} />
                    <span>its {API_DATA.current.condition.toLowerCase()}</span>
                </div>
                {(response !== null && (API_DATA.cityName.toUpperCase() === city.toUpperCase()))
                    ?
                    <div>
                        <div className={classes.Weather_data_container}>
                            <div>
                                <img src={API_DATA.current.iconUrl}></img>
                            </div>
                            <div>{
                                isCelsius
                                    ?
                                    API_DATA.current.tempC
                                    :
                                    API_DATA.current.tempF}
                            </div>
                            <div>
                                <div>
                                    {
                                        isCelsius
                                            ?
                                            `${API_DATA.current.windKph} kph`
                                            :
                                            `${API_DATA.current.windMph} mph`
                                    }
                                </div>
                                <div>{API_DATA.current.humidity} PERC</div>
                                <div>{API_DATA.current.chanceOfRain} RAIN</div>
                            </div>
                        </div>
                        <div className={classes.Weather_days_container}>
                            <div>
                                <div>
                                    <img
                                        src={API_DATA.tomorrow.iconUrl}
                                    ></img>
                                </div>
                                <div>{
                                    isCelsius
                                        ?
                                        `${API_DATA.tomorrow.minTempC}-${API_DATA.tomorrow.maxTempC}`
                                        :
                                        `${API_DATA.tomorrow.minTempF}-${API_DATA.tomorrow.maxTempF}`
                                }
                                </div>
                                <div>{API_DATA.tomorrow.date}</div>
                            </div>
                            <div>
                                <div>
                                    <img
                                        src={response.data.forecast.forecastday[2].day.condition.icon}
                                    ></img>
                                </div>
                                <div>{
                                    isCelsius
                                        ?
                                        `${API_DATA.afterTomorrow.minTempC}-${API_DATA.afterTomorrow.maxTempC}`
                                        :
                                        `${API_DATA.afterTomorrow.minTempF}-${API_DATA.afterTomorrow.maxTempF}`
                                }
                                </div><div>{API_DATA.afterTomorrow.date}</div>
                            </div>

                        </div>

                        <div>
                            <button onClick={() => setIsCelsius(true)}>C</button>
                            <button onClick={() => setIsCelsius(false)}>F</button>
                        </div>
                    </div>
                    :
                    <div>emplts</div>
                }
            </div>

        </div>
    )
}

export default Weather