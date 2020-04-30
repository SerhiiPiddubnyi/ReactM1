import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFetchingFollow,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {UsersAPI as usersAPI} from "../../api/Api";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.items);
                this.props.setTotalUsersCount(responce.totalCount);
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingProgress = {this.props.followingProgress}
                       toggleIsFetchingFollow = {this.props.toggleIsFetchingFollow}
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching,
    toggleIsFetchingFollow
})(UsersAPIComponent);