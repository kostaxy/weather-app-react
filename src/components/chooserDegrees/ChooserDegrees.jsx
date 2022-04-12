import React from 'react'
import classes from './ChooserDegrees.module.css'

const ChooserDegrees = ({isCelsius,setIsCelsius}) => {
    return (
        <div className={classes.Choose_btn__container}>
            <div className={isCelsius ? `${classes.Choose_btn} ${classes.active}` : `${classes.Choose_btn}`} onClick={() => setIsCelsius(true)}>C°</div>
            <div>|</div>
            <div className={isCelsius ? `${classes.Choose_btn}` : `${classes.Choose_btn}  ${classes.active}`} onClick={() => setIsCelsius(false)}>F°</div>
        </div>
    )
}

export default ChooserDegrees