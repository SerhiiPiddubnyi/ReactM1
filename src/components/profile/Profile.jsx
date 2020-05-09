import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./myPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {updateStatus} from "../../Redux/profile-reducer";

const Profile = (props) =>{

    return(
        <div>
            <ProfileInfo userProfile = {props.userProfile}
                         status = {props.status}
                         updateStatus = {props.updateStatus}/>
            <MyPostsContanier />
        </div>
    );
}

export  default Profile;