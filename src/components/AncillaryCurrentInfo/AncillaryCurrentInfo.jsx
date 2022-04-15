import React from 'react'
import { useSelector } from 'react-redux'
import { WiCloud, WiRaindrop, WiStrongWind } from 'weather-icons-react'
import classes from './AncillaryCurrentInfo.module.css'

const AncillaryCurrentInfo = ({API_DATA}) => {
    
    const isCelsius = useSelector(state => state.settingsReducer.isCelsius)

    return (
        <div>
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
                <WiCloud size={32} color='#000' />
                <div>
                    {API_DATA.current.cloud} </div>
                <div>%</div>
            </div>
            <div className={classes.Current_ancillary}>
                <WiRaindrop size={32} color='#000' />
                <div>{API_DATA.current.humidity}</div>
                <div>%</div>
            </div>
        </div>
    )
}

export default AncillaryCurrentInfo