const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

const instalState = {
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
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: action.text,}]
            }

        default:
            return state;

    }
}

export let addMessageActionCreator = (text) => {
    return {type: ADD_MESSAGE, text};
}

export default dialogsReducer;