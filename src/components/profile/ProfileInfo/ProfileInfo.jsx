import style from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={style.img} src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className={style.deckriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;
