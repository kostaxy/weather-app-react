import axios from 'axios'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { API } from '../../API/weatherApi'
import classes from './Weather.module.css'
import exampleJson from '../../API/example.json'
import { WiDaySunny, WiDegrees, WiRaindrop, WiStrongWind, WiUmbrella } from 'weather-icons-react'


const Weather = () => {

    const [city, setCity] = useState('');
    const [isCelsius, setIsCelsius] = useState(true)
    const [response, setResponse] = useState(exampleJson)

    const [width, setWidth] = useState(0)
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth + 20);
    }, [city]);

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
                iconUrl: 'https:' + response.data.current.condition.icon.replace("64x64", "128x128"),
                condition: response.data.current.condition.text,
                windKph: response.data.current.wind_kph.toFixed(),
                windMph: response.data.current.wind_mph.toFixed(),
                humidity: response.data.current.humidity,
                tempC: response.data.current.temp_c.toFixed(),
                tempF: response.data.current.temp_f.toFixed(),
                chanceOfRain: response.data.forecast.forecastday[0].day.daily_chance_of_rain,
            },
            tomorrow: {
                iconUrl: response.data.forecast.forecastday[1].day.condition.icon,
                minTempC: response.data.forecast.forecastday[1].day.mintemp_c.toFixed(),
                minTempF: response.data.forecast.forecastday[1].day.mintemp_f.toFixed(),
                maxTempC: response.data.forecast.forecastday[1].day.maxtemp_c.toFixed(),
                maxTempF: response.data.forecast.forecastday[1].day.maxtemp_f.toFixed(),
                date:
                    ('0' + new Date(response.data.forecast.forecastday[1].date).getDate()).slice(-2)
                    + '.' +
                    ('0' + (new Date(response.data.forecast.forecastday[1].date).getMonth() + 1)).slice(-2),
            },
            afterTomorrow: {
                iconUrl: response.data.forecast.forecastday[2].day.condition.icon,
                minTempC: response.data.forecast.forecastday[2].day.mintemp_c.toFixed(),
                minTempF: response.data.forecast.forecastday[2].day.mintemp_f.toFixed(),
                maxTempC: response.data.forecast.forecastday[2].day.maxtemp_c.toFixed(),
                maxTempF: response.data.forecast.forecastday[2].day.maxtemp_f.toFixed(),
                date:
                    ('0' + new Date(response.data.forecast.forecastday[2].date).getDate()).slice(-2)
                    + '.' +
                    ('0' + (new Date(response.data.forecast.forecastday[2].date).getMonth() + 1)).slice(-2),
            }
        }
        : API_DATA = {}

    return (
        <div>

            <button onClick={showTestResponse}>check response</button>
            <div className={classes.Weather__container}>

                <div className={classes.Weather_input}>

                    <span className={classes.Weather__input_text}>Right now in </span>
                    <span ref={span} id={classes.hideElem}>{city}</span>
                    <input type="text" style={{ width }} autoFocus onChange={handleChange} />
                    {/* <input type='text' onChange={handleChange} /> */}
                    <span className={classes.Weather__input_text}>

                        {
                            (response !== null && (API_DATA.cityName.toUpperCase() === city.toUpperCase()))
                                ?
                                `, it's ${API_DATA.current.condition.toLowerCase()}`
                                :
                                `, none info :(`
                        }
                    </span>
                </div>
                {(response !== null && (API_DATA.cityName.toUpperCase() === city.toUpperCase()))
                    ?
                    <div className={classes.Weather_data_container}>
                        <div className={classes.Weather_current_container}>
                            <div>
                                <img
                                    className={classes.Current_icon}
                                    src={API_DATA.current.iconUrl}
                                ></img>
                            </div>
                            <div className={classes.Current_temp}>
                                {
                                    isCelsius
                                        ?
                                        API_DATA.current.tempC
                                        :
                                        API_DATA.current.tempF
                                }°
                            </div>
                            <div className={classes.Current_ancillary__wrapper}>
                                <div className={classes.Current_ancillary}>
                                    <WiStrongWind size={32} color='#000' />
                                    <div>
                                        {
                                            isCelsius
                                                ?
                                                API_DATA.current.windKph
                                                :
                                                API_DATA.current.windMph
                                        }
                                    </div>
                                    <div>
                                        {
                                            isCelsius
                                                ?
                                                ` km/h`
                                                :
                                                ` mph`
                                        }
                                    </div>
                                </div>
                                <div className={classes.Current_ancillary}>
                                    <WiUmbrella size={32} color='#000' />
                                    <div>{API_DATA.current.humidity}</div>
                                    <div>%</div>
                                </div>
                                <div className={classes.Current_ancillary}>
                                    <WiRaindrop size={32} color='#000' />
                                    <div>
                                        {API_DATA.current.chanceOfRain} </div>
                                    <div>%</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.Weather_forecast_container}>
                            <div className={classes.Weather_forecast}>
                                <div>
                                    <img
                                        src={API_DATA.tomorrow.iconUrl}
                                    ></img>
                                </div>
                                <div>{
                                    isCelsius
                                        ?
                                        `${API_DATA.tomorrow.minTempC}°/${API_DATA.tomorrow.maxTempC}°`
                                        :
                                        `${API_DATA.tomorrow.minTempF}°/${API_DATA.tomorrow.maxTempF}°`
                                }
                                </div>
                                <div>{API_DATA.tomorrow.date}</div>
                            </div>
                            <div className={classes.Weather_forecast}>
                                <div>
                                    <img
                                        src={response.data.forecast.forecastday[2].day.condition.icon}
                                    ></img>
                                </div>
                                <div>{
                                    isCelsius
                                        ?
                                        `${API_DATA.afterTomorrow.minTempC}°/${API_DATA.afterTomorrow.maxTempC}°`
                                        :
                                        `${API_DATA.afterTomorrow.minTempF}°/${API_DATA.afterTomorrow.maxTempF}°`
                                }
                                </div><div>{API_DATA.afterTomorrow.date}</div>
                            </div>

                        </div>

                        <div className={classes.Choose_btn__container}>
                            <div className={classes.Choose_btn} onClick={() => setIsCelsius(true)}>C°</div>
                            <div>|</div>
                            <div className={classes.Choose_btn} onClick={() => setIsCelsius(false)}>F°</div>
                        </div>
                    </div>
                    :
                    <div className={classes.Weather_data_container}>Enter city to get weather :)</div>
                }
            </div>

        </div>
    )
}

export default Weather