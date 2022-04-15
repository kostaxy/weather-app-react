import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCelsiusAction } from '../../store/settingsReducer'
import classes from './ChooserDegrees.module.css'

const ChooserDegrees = () => {
    const dispatch = useDispatch()
    
    const isCelsius = useSelector(state => state.settingsReducer.isCelsius)

    const setIsCelsius = (isCelsius) => {
        dispatch(setIsCelsiusAction(isCelsius))
    }

    return (
        <div className={classes.Choose_btn__container}>
            <div className={isCelsius ? `${classes.Choose_btn} ${classes.active}` : `${classes.Choose_btn}`} onClick={() => setIsCelsius(true)}>C°</div>
            <div>|</div>
            <div className={isCelsius ? `${classes.Choose_btn}` : `${classes.Choose_btn}  ${classes.active}`} onClick={() => setIsCelsius(false)}>F°</div>
        </div>
    )
}

export default ChooserDegrees