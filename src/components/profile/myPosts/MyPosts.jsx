import React from "react";
import style from './MyPosts.module.css';
import NewPost from "./newPost/NewPost";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className='posts'>
            <NewPost/>
            <Post message = 'Hi! how are you' likesCount = '0' />
            <Post message = 'It is my first post.' likesCount = '33'/>
        </div>
    );
}

export default MyPosts;