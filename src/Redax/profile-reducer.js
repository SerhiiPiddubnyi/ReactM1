const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.textForNewPost,
                likesCount: 1,
            };
            state.posts.push(newPost);
            state.textForNewPost = '';
            return state;
        case CHANGE_TEXT_POST :
            state.textForNewPost = action.newText;
            return state;
        default:
            return state;
    }
}

export  let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let changeTextPostActionCreator = (text) => {
    return {type: CHANGE_TEXT_POST,
        newText: text}
}

export default profileReducer;