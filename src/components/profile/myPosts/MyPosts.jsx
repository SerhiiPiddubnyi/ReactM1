import React from "react";
import style from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post key = {props.id}
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
            <div className={style.item}>
                <div>
                    <textarea onChange={changeText} value={props.textForNewPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;