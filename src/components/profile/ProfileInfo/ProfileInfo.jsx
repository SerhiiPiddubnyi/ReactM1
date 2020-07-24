import style from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({userProfile, status, updateStatus, isOwner, addMainPhoto}) => {
    if (!userProfile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
        if (e.target.files.length){
            addMainPhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={style.deckriptionBlock}>
                <div>{userProfile.fullName}</div>
                <img className={style.userPic} src={userProfile.photos.small || userPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status ={status } updateStatus = {updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo;
