import style from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({userProfile, status, updateStatus}) => {
    if (!userProfile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.deckriptionBlock}>
                <div>{userProfile.fullName}</div>
                <img className={style.userPic} src={userProfile.photos.small ? userProfile.photos.small : userPhoto}/>
                <ProfileStatusWithHooks status ={status } updateStatus = {updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo;
