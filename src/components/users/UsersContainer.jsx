import React from "react";
import {connect} from "react-redux";
import {
    setUsersCreator, following,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.setUsersCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setUsersCreator(page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingProgress = {this.props.followingProgress}
                       following = {this.props.following}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }
}

export default compose(
    connect(mapStateToProps, { setUsersCreator, following, }),
    withAuthRedirect,
)(UsersComponent)

