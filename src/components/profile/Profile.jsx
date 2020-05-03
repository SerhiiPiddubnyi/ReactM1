import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./myPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) =>{

    return(
        <div>
            <ProfileInfo userProfile = {props.userProfile}/>
            <MyPostsContanier />
        </div>
    );
}

export  default Profile;