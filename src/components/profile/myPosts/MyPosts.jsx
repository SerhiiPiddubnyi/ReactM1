import React from "react";
import style from './MyPosts.module.css';
import Post from "./post/Post";
import NewPostForm from "./NewPostsForm";

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(post => <Post key = {post.id}
                                                      message = {post.message}
                                                      likesCount = {post.likesCount} />)

    let addPost = () => {
        props.addPost();
    };

    let changeText = (e) => {
        let text = e.target.value;
        props.changePostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm {...props}/>
            {postsElements}
        </div>
    );
}

export default MyPosts;