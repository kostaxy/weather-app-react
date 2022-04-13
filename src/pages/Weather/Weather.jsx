import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API } from '../../API/weatherApi'
import classes from './Weather.module.css'
import { getIconSrcByCode } from '../../UI/icons/weather/WeatherIcon'
import ChooserDegrees from '../../components/ChooserDegrees/ChooserDegrees'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import ForecastWeather from '../../components/ForecastWeather/ForecastWeather'


const Weather = () => {

    const [city, setCity] = useState('');
    const [isCelsius, setIsCelsius] = useState(true)
    // const [response, setResponse] = useState(exampleJson)

    const [width, setWidth] = useState(0)
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth + 20);
    }, [city]);

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


    function handleChange(event) {
        setCity(event.target.value)
    }

    const isCityNameСorrect = () => {
        return (response !== null && (API_DATA.cityName.toUpperCase() === city.toUpperCase()))
    }

    // const showTestResponse = () => {
    //     console.log(response)
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
            {/* <button onClick={showTestResponse}>check response</button> */}
            <div className={classes.Weather__container}>

                <div className={classes.Weather_input}>

                    <span className={classes.Weather__input_text}>Right now in </span>
                    <span ref={span} id={classes.hideElem}>{city}</span>
                    <input type="text" style={{ width }} autoFocus onChange={handleChange} />

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


                {
                    isCityNameСorrect()
                        ?
                        <div className={classes.Weather_data_container}>
                            <CurrentWeather API_DATA={API_DATA} isCelsius={isCelsius} />
                            <ForecastWeather response={response} isCelsius={isCelsius} />
                            <ChooserDegrees isCelsius={isCelsius} setIsCelsius={setIsCelsius}></ChooserDegrees>
                        </div>
                        :
                        <div className={classes.Weather_data_container}>
                            <div className={classes.Weather_data_no_info}>
                                Enter city to get weather :)
                            </div>
                        </div>
                }
            </div>

        </div>
    )
}

export default Weather