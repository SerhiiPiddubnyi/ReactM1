const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

export let store = {
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.textForNewPost,
                likesCount: 1,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textForNewPost = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.textForNewMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.textForNewMessage = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === CHANGE_TEXT_POST) {
            this._state.profilePage.textForNewPost = action.newText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === CHANGE_TEXT_MESSAGE) {
            this._state.dialogsPage.textForNewMessage = action.newText;
            this.rerenderEntireTree(this._state);
        }
    },
}

export  let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let changeTextPostActionCreator = (text) => {
    return {type: CHANGE_TEXT_POST,
        newText: text}
}

export let addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export let changeTextMessageActionCreator =(text) => {
    return  {type: CHANGE_TEXT_MESSAGE,
        newText: text};
}
