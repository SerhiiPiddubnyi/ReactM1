import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(responce => {
                this.props.setUserProfile(responce.data)
            })
    }

    render() {
       return  <Profile {...this.props} userProfile = {this.props.userProfile}/>
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
})

export  default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);