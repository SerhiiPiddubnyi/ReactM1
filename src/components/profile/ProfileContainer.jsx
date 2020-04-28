import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithUrlDataContainerComponent  = withRouter(ProfileContainer);

export  default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent );