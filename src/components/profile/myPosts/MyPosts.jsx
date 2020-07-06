import React from "react";
import style from './MyPosts.module.css';
import Post from "./post/Post";
import NewPostForm from "./NewPostsForm";

const MyPosts = React.memo(props => {

    console.log("render")

    let postsElements = props.profilePage.posts.map(post => <Post key={post.id}
                                                                  message={post.message}
                                                                  likesCount={post.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm {...props}/>
            {postsElements}
        </div>
    );
})

export default MyPosts;