import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo />
            <MyPosts state = {props.state}
                     addPost = {props.addPost}
                     changeText = {props.changeText}/>
        </div>
    );
}

export  default Profile;