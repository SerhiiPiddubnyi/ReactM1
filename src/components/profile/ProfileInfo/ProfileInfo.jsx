import style from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.userProfile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.deckriptionBlock}>
                <div>{props.userProfile.fullName}</div>
                <img className={style.userPic} src={props.userProfile.photos.small ? props.userProfile.photos.small : userPhoto}/>
                <ProfileStatus status ={props.status } updateStatus = {props.updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo;
