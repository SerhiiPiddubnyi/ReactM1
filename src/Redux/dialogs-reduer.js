const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

const instalState = {
    textForNewMessage: '',
    dialogs: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Kasya'},
        {id: 3, name: 'Ivasya'},
        {id: 4, name: 'Tasya'},
        {id: 5, name: 'Masya'},
        {id: 6, name: 'Pasya'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine!'},
    ],
}

const dialogsReducer = (state = instalState, action) => {
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

export let changeTextMessageActionCreator = (text) => {
    return {
        type: CHANGE_TEXT_MESSAGE,
        newText: text
    };
}

export default dialogsReducer;