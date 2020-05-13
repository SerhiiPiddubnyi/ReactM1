import React from "react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (text) =>{
            dispatch(addPostActionCreator(text));
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;