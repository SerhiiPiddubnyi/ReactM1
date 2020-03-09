import React from "react";
import style from './MyPosts.module.css';
import NewPost from "./newPost/NewPost";
import Post from "./post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi! how are you', likesCount: 4,},
        {id: 2, message: 'It\'s my first post.', likesCount: 18,},
    ];

    let postsElements = posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} />)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <NewPost/>
            {postsElements}
        </div>
    );
}

export default MyPosts;