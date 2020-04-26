import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./myPosts/MyPostsContainer";

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo userProfile = {props.userProfile}/>
            <MyPostsContanier />
        </div>
    );
}

export  default Profile;