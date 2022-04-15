import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isCityNameСorrect } from '../../functions/isCityNameCorrect'
import { setCityAction } from '../../store/cityReducer'
import classes from './InputCity.module.css'

const InputCity = ({response, API_DATA}) => {

    const dispatch = useDispatch()
    const city = useSelector(state => state.cityReducer.city)

    const setCity = (city) => {
        dispatch(setCityAction(city))
    }

    const [width, setWidth] = useState(0)
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth + 20);
    }, [city]);

    function handleChange(event) {
        setCity(event.target.value)
    }

    return (
        <div className={classes.Weather_input}>

            <span className={classes.Weather__input_text}>Right now in </span>
            <span ref={span} id={classes.hideElem}>{city}</span>
            <input type="text" style={{ width }} autoFocus onChange={handleChange} />

            <span className={classes.Weather__input_text}>

                {
                    isCityNameСorrect(response, API_DATA, city)
                        ?
                        `, it's ${API_DATA.current.condition.toLowerCase()}`
                        :
                        `, none info :(`
                }
            </span>
        </div>
    )
}

export default InputCity