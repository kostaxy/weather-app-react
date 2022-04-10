import axios from 'axios'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { API } from '../../API/weatherApi'
import classes from './Weather.module.css'


const Weather = () => {

    const [city, setCity] = useState('');
    const CancelToken = axios.CancelToken;
    const cancelSource = React.useRef(null);
    const [responseTest, setResponseTest] = useState(null)

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
                return setResponseTest(response)
            })
            .catch((e) => {
                setResponseTest(null)
                if (axios.isCancel(e)) {
                    return console.log("e", e)
                }
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
        setTimeout(() => {
            setCity(event.target.value)
        }, 700);
    }

    const showTestResponse = () => {
        console.log(responseTest)
    }

    return (
        <div>

            <div className={classes.Weather__container}>

                <div className={classes.Weather_input}>
                    <input type='text' onChange={handleChange} />
                    <button onClick={showTestResponse}>check response</button>
                </div>
                {responseTest !== null

                    ?
                    <div>
                        <div className={classes.Weather_data_container}>
                            <div>{responseTest.data.current.condition.icon}</div>
                            <div>TEMP</div>
                            <div>
                                <div>{responseTest.data.location.name}</div>
                                <div>small percent</div>
                                <div>small percent2</div>
                            </div>
                        </div>
                        <div className={classes.Weather_days_container}>
                            <div>day1</div>
                            <div>day2</div>
                            <div>day3</div>
                            <div>day4</div>
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