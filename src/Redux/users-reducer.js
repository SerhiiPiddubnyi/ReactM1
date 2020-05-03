import {FollowAPI, UsersAPI} from "../api/Api";

const FOLLOWING = 'FOLLOWING';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_FOLLOW = 'TOGGLE_IS_FETCHING_FOLLOW';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFething}
        }
        case TOGGLE_IS_FETCHING_FOLLOW: {
            return {
                ...state,
                followingProgress: action.isFething
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export let followingSuccess = (userId) => {
    return {type: FOLLOWING, userId}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users}
}
export let setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export let toggleIsFetching = (isFething) => {
    return {type: TOGGLE_IS_FETCHING, isFething}
}
export let toggleIsFetchingFollow = (isFething, userId) => {
    return {type: TOGGLE_IS_FETCHING_FOLLOW, isFething, userId}
}

export const setUsersCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize)
            .then(responce => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(responce.items));
                dispatch(setTotalUsersCount(responce.totalCount));
            })
    }
}

export const following = (userId, type) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingFollow(true, userId));
        FollowAPI.following(userId, type)
            .then(responce => {
                if (responce.resultCode == 0) {
                    dispatch(followingSuccess(userId));
                }
               dispatch(toggleIsFetchingFollow(false, userId));
            })
    }
}

export default usersReducer;