const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.textForNewMessage
            }
            state.messages.push(newMessage);
            state.textForNewMessage = '';
            return state;
        case CHANGE_TEXT_MESSAGE:
            state.textForNewMessage = action.newText;
            return state;
        default:
            return state;

    }
}

export let addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export let changeTextMessageActionCreator =(text) => {
    return  {type: CHANGE_TEXT_MESSAGE,
        newText: text};
}

export default dialogsReducer;