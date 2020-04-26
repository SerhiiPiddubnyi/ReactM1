import style from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.userProfile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={style.img} src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className={style.deckriptionBlock}>
                <img src={props.userProfile.photos.small}/>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;
