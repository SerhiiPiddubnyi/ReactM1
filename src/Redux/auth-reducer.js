import {AuthAPI, SecurityAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export let setAuthUserData = (id, email, login, isAuth) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
}
export let getCaptcha = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
}

export let getAuthUserData = () => async (dispatch) => {
    const responce = await AuthAPI.authMe()
    if (responce.resultCode === 0) {
        let {id, email, login} = responce.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export let login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const responce = await AuthAPI.login(email, password, rememberMe, captcha)

    if (responce.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (responce.resultCode === 10)
            dispatch(getCaptchaUrl())

        let message = responce.messages.length > 0 ? responce.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export let logout = () => async (dispatch) => {
    const responce = await AuthAPI.logout()
    if (responce.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export let getCaptchaUrl = () => async (dispatch) => {
    const responce = await SecurityAPI.getCaptcha()
    const captchaUrl = responce.url
    dispatch(getCaptcha(captchaUrl))
}


export default authReducer;