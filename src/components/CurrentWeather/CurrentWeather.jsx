import React from 'react'
import { useSelector } from 'react-redux'
import AncillaryCurrentInfo from '../AncillaryCurrentInfo/AncillaryCurrentInfo'
import classes from './CurrentWeather.module.css'

const CurrentWeather = ({API_DATA}) => {
    
    const isCelsius = useSelector(state => state.settingsReducer.isCelsius)

    return (
        <div className={classes.Weather_current_container}>
            <div>
                <img
                    className={classes.Current_icon}
                    src={API_DATA.current.iconUrl}
                    alt='icon'
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
            <AncillaryCurrentInfo API_DATA={API_DATA}/>
        </div>
    )
}

export default CurrentWeather