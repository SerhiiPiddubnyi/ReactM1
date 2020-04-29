import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {UsersAPI as usersAPI} from "../../api/Api";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(responce => {
                this.props.setIsFetching(false);
                this.props.setUsers(responce.items);
                this.props.setTotalUsersCount(responce.totalCount);
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(responce => {
                this.props.setIsFetching(false);
                this.props.setUsers(responce.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                />
            }
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
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
})(UsersAPIComponent);