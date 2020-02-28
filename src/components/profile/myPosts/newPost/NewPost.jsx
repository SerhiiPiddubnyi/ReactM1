import React from "react";
import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={style.item}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>

    );
}
export default NewPost;