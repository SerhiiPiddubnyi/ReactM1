import {FollowAPI, UsersAPI} from "../api/Api";

const FOLLOWING = 'users/FOLLOWING';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_FOLLOW = 'users/TOGGLE_IS_FETCHING_FOLLOW';

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

export const setUsersCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    const responce = await UsersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(responce.items));
    dispatch(setTotalUsersCount(responce.totalCount));
}

export const following = (userId, type) => async (dispatch) => {
    dispatch(toggleIsFetchingFollow(true, userId));
    const responce = await FollowAPI.following(userId, type)

    if (responce.resultCode === 0) {
        dispatch(followingSuccess(userId));
    }
    dispatch(toggleIsFetchingFollow(false, userId));
}

export default usersReducer;