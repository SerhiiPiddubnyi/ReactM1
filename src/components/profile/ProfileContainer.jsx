import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
       return  <Profile {...this.props} userProfile = {this.props.userProfile}/>
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
})

const WithUrlDataContainerComponent  = withRouter(ProfileContainer);

export  default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent );