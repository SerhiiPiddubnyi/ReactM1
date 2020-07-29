import {ProfileAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_MAIN_PHOTO = 'profile/SET_MAIN_PHOTO';
const DEL_POST = 'profile/DEL-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

const initialState = {
    posts: [
        {id: 1, message: 'Hi! how are you', likesCount: 4,},
        {id: 2, message: 'It\'s my first post.', likesCount: 18,}
    ],
    userProfile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.text,
                likesCount: 1,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case DEL_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postID),
            };
        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                userProfile: action.userProfile,
            };
        }

        case SET_STATUS : {
            return {
                ...state,
                status: action.status,
            };
        }

        case SET_MAIN_PHOTO : {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            };
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (text) => {
    return {type: ADD_POST, text}
}

export let setMainPhotoActionCreator = (photos) => {
    return {type: SET_MAIN_PHOTO, photos}
}

export let deletePostActionCreator = (postID) => {
    return {type: DEL_POST, postID}
}

export let setUserProfile = (userProfile) => {
    return {type: SET_USER_PROFILE, userProfile}
}

export let setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export let getUserProfile = (userId) => async (dispatch) => {
    const responce = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(responce))
}

export let getStatus = (userId) => async (dispatch) => {
    const responce = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(responce))
}

export let updateStatus = (status) => async (dispatch) => {
    const responce = await ProfileAPI.updateStatus(status)
    if (responce.resultCode === 0)
        dispatch(setStatus(status))
}

export let addMainPhoto = (photo) => async (dispatch) => {
    const responce = await ProfileAPI.savePhoto(photo)
    if (responce.resultCode === 0)
        dispatch(setMainPhotoActionCreator(responce.data.photos))
}

export let saveProfile = (userData) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const responce = await ProfileAPI.saveProfile(userData)
    let message = responce.messages.length > 0 ? responce.messages[0] : "Some error";
    const getWrongField = (message) => {
        const position = message.indexOf("Contacts->");
        if (position >= 0){
            return message.substring(position + 10, message.length - 1).toLowerCase()
        }
    }

    if (responce.resultCode === 0){
        dispatch(getUserProfile(userId))
    }else {
        const wrongField  = getWrongField(message)
        dispatch(stopSubmit("profileInfo", {"contacts": {[wrongField] : `${wrongField} contact is incorrect`}}))
        return Promise.reject(message)
    }

}

export default profileReducer;