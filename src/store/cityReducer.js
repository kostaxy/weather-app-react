const defaultState = {
    city: ''
}

const SET_CITY = "SET_CITY"

export const cityReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_CITY:
            return {...state,city: action.payload}

        default:
            return state
    }
}

export const setCityAction = (payload) => ({type: SET_CITY, payload}) 