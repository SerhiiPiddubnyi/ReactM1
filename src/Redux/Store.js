import dialogsReducer from "./dialogs-reduer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

let store = {
    _state: {
        profilePage: {
            textForNewPost: '',
            posts: [
                {id: 1, message: 'Hi! how are you', likesCount: 4,},
                {id: 2, message: 'It\'s my first post.', likesCount: 18,}
            ],
        },
        dialogsPage: {
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
    },

    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log('State was changed')
    },

    subscribe (observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch (action) {
        this._state.dialogsPage = dialogsReducer(store.getState().dialogsPage, action);
        this._state.profilePage = profileReducer(store.getState().profilePage, action);
        store.rerenderEntireTree(store.getState());

    },
}

export default store;