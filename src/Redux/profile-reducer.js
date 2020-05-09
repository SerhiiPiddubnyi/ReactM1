import {ProfileAPI} from "../api/Api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {id: 1, message: 'Hi! how are you', likesCount: 4,},
        {id: 2, message: 'It\'s my first post.', likesCount: 18,}
    ],
    textForNewPost: '',
    userProfile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.textForNewPost,
                likesCount: 1,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                textForNewPost: '',
            };
        }
        case CHANGE_TEXT_POST : {
            return {
                ...state,
                textForNewPost: action.newText,
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

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let changeTextPostActionCreator = (text) => {
    return {type: CHANGE_TEXT_POST, newText: text}
}
export let setUserProfile = (userProfile) => {
    return {type: SET_USER_PROFILE, userProfile}
}
export let setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export let  getUserProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId)
            .then(responce => {
                dispatch(setUserProfile(responce))
            })
    }

}

export let  getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(responce => {
                dispatch(setStatus(responce))
            })
    }
}

export let  updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then(responce => {
                if (responce.resultCode === 0)
                dispatch(setStatus(status))
            })
    }
}

export default profileReducer;