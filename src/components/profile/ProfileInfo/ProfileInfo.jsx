import style from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfoDataForm from "./ProfileInfoDataForm";


const ProfileInfo = ({userProfile, status, updateStatus, isOwner, addMainPhoto, saveProfile, getUserProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!userProfile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            addMainPhoto(e.target.files[0]);
        }
    }

    const onSubmit = (userData) => {
        saveProfile(userData).then(()=>{
            setEditMode(false)
        })
    }

    return (
        <div>
            <img className={style.userPic} src={userProfile.photos.small || userPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileInfoDataForm initialValues={userProfile} onSubmit={onSubmit} userProfile={userProfile}/>
                : <ProfileInfoData userProfile={userProfile}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>}
        </div>
    )
}

const ProfileInfoData = ({userProfile, isOwner, goToEditMode}) => {
    return <div className={style.deckriptionBlock}>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <div>{userProfile.fullName}</div>
        </div>
        <div>
            <b>Looking or a job:</b> {userProfile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>Skills:</b> {userProfile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me:</b> {userProfile.aboutMe}
        </div>

        <div>
            <b>Contacts:</b> {Object.keys(userProfile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contaktInfo={userProfile.contacts[key]}/>
        })}
        </div>
    </div>
}

export const Contact = ({contactTitle, contactInfo}) => {
    return <div className={style.contact}><b>{`${contactTitle}: ${contactInfo || "no"}`}</b></div>
}

export default ProfileInfo;
