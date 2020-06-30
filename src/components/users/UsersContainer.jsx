import React from "react";
import {connect} from "react-redux";
import {
    setUsersCreator, following,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, { setUsersCreator, following, }),
)(UsersComponent)

