import React from "react";
import style from './MyPosts.module.css';
import NewPost from "./newPost/NewPost";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <NewPost/>
            <Post message = 'Hi! how are you' likesCount = '0' />
            <Post message = 'It is my first post.' likesCount = '33'/>
        </div>
    );
}

export default MyPosts;