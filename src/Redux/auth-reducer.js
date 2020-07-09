import {AuthAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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

export let getAuthUserData = () => async (dispatch) => {
    const responce = await AuthAPI.authMe()
    if (responce.resultCode === 0) {
        let {id, email, login} = responce.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export let login = (email, password, rememberMe) => async (dispatch) => {
    const responce = await AuthAPI.login(email, password, rememberMe)

    if (responce.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
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


export default authReducer;