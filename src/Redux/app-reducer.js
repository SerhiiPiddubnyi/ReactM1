import {AuthAPI} from "../api/Api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export let initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}

export let initializeApp = () => {
    return (dispatch) => {
        let promiseGetUserData = dispatch(getAuthUserData())
        Promise.all([promiseGetUserData])
            .then(() => {
            dispatch(initializedSuccess())
        })
    }
}

export default appReducer;