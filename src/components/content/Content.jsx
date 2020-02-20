import React from "react";
import style from './Content.module.css';
const Content = () =>{
    return(
        <div className={style.content}>
            <div>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div className='posts'>
                My posts
                <div className= {style.item}>
                    New post
                </div>
                <div className= {style.item}>
                    Post1
                </div>
                <div className= {style.item}>
                    post2
                </div>
            </div>
            <div></div>
        </div>
    );
}

export  default Content;