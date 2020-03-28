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
    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let messageBody = state.textForNewMessage;
            return {
                ...state,
                textForNewMessage: '',
                messages: [...state.messages, { id: 4, message: messageBody, }]
            }

        case CHANGE_TEXT_MESSAGE:
            return {
                ...state,
                textForNewMessage: action.newText,
            }
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