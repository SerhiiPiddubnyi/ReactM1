import React from "react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContanier = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let changePostText = (text) => {
                        let action = changeTextPostActionCreator(text);
                        store.dispatch(action);
                    }
                    return < MyPosts changePostText={changePostText}
                                     addPost={addPost}
                                     posts={state.profilePage.posts}
                                     textForNewPost={state.profilePage.textForNewPost}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContanier;