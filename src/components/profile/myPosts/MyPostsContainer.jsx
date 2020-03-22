import React from "react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContanier = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let changePostText = (text) => {
        let action = changeTextPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts changePostText={changePostText}
                     addPost={addPost}
                     posts = {state.profilePage.posts}
                     textForNewPost = {state.profilePage.textForNewPost}/>);
}

export default MyPostsContanier;