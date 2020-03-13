import React from "react";
import style from './MyPosts.module.css';
import NewPost from "./newPost/NewPost";
import Post from "./post/Post";

const MyPosts = (props) => {
    let postsElements = props.state.posts.map(post => <Post key = {props.id}
                                                      message = {post.message}
                                                      likesCount = {post.likesCount} />)
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <NewPost addPost = {props.addPost}

                     text = {props.state.textForNewPost}
                     changeText = {props.changeText}/>
            {postsElements}
        </div>
    );
}

export default MyPosts;