import {ProfileAPI} from "../api/Api";

const ADD_POST = 'profile/ADD-POST';
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
        default:
            return state;
    }
}

export let addPostActionCreator = (text) => {
    return {type: ADD_POST, text}
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

export default profileReducer;