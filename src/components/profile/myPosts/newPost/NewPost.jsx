import React from "react";
import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={style.item}>
            <textarea></textarea>
            <button>Add post</button>
        </div>

    );
}
export default NewPost;