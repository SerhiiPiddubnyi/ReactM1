import React from "react";
import style from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
const Profile = () =>{
    return(
        <div>
            <div >
                <img className={style.img} src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export  default Profile;