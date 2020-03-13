import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        textForNewPost: '',
        posts: [
            {id: 1, message: 'Hi! how are you', likesCount: 4,},
            {id: 2, message: 'It\'s my first post.', likesCount: 18,}
        ],
    },
    dialogsPage: {
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
}

export let addPost = (newText) => {
    debugger;
    let newPost = {
        id: 3,
        message: newText,
        likesCount: 1,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let changeText= (text) => {
    state.profilePage.textForNewPost = text;
    rerenderEntireTree(state);
}

export default state;