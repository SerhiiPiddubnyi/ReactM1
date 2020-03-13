import React from "react";
import style from './NewPost.module.css';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    let changeText = () => {
        let text = newPostElement.current.value;
        props.changeText(text);
    }

    return (
        <div className={style.item}>
            <div>
                <textarea onChange={changeText} ref = {newPostElement}>{props.text}</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>

    );
}
export default NewPost;