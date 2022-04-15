const defaultState = {
    isCelsius: true,
}

const SET_IS_CELSIUS = "SET_IS_CELSIUS"

export const settingsReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_IS_CELSIUS:
            return {...state, isCelsius: action.payload}

        default:
            return state
    }
}

export const setIsCelsiusAction = (payload) => ({type: SET_IS_CELSIUS, payload}) 