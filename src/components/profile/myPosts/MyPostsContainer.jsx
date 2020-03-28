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
        changePostText: (text) => {
            dispatch(changeTextPostActionCreator(text));
        },
        addPost: () =>{
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContanier = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContanier;