import React from "react";
import style from './NewPost.module.css';
import {addPostActionCreator, changeTextPostActionCreator} from "../../../../Redax/profile-reducer";

const NewPost = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let changeText = (e) => {
        let text = e.target.value;
        props.dispatch(changeTextPostActionCreator(text));
    }

    return (
        <div className={style.item}>
            <div>
                <textarea onChange={changeText} value={props.text}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}
export default NewPost;