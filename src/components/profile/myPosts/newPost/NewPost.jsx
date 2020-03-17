import React from "react";
import style from './NewPost.module.css';
import {addPostActionCreator, changeTextPostActionCreator} from "../../../../Redax/State";

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let changeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(changeTextPostActionCreator(text));
    }

    return (
        <div className={style.item}>
            <div>
                <textarea onChange={changeText} ref = {newPostElement} value={props.text}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}
export default NewPost;