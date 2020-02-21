import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://5koleso.ru/wp-content/uploads/2020/01/mercedes-benz-vision_avtr_concept-2020-1280-03-1024x768.jpg'/>
            {props.message}
            <div>
                <button>Like</button> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;