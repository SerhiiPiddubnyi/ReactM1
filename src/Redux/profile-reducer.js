const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    textForNewPost: '',
    posts: [
        {id: 1, message: 'Hi! how are you', likesCount: 4,},
        {id: 2, message: 'It\'s my first post.', likesCount: 18,}
    ],
    userProfile: null,
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
                textForNewPost: action.newTex,
            };
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                userProfile: action.userProfile,
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

export default profileReducer;