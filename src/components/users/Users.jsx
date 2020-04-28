import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let firstPage = 0;
    let lastPage = 0;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    if (props.currentPage <= 6 || pagesCount < 12) {
        firstPage = 1;
        lastPage = (pagesCount < 12) ? pagesCount : 11;
    } else {
        firstPage = props.currentPage - 5;
        lastPage = (props.currentPage + 5 < pagesCount) ? props.currentPage + 5 : pagesCount;
    }
    let pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(page)
                             }}>{page + ' '}</span>
            })}
        </div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to = {'/profile/' + user.id}>
                        <img src={user.photos.small
                            ? user.photos.small
                            : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '62005d27-039f-4c86-85d5-445b3f38c01d'
                                }
                            })
                                .then(responce => {
                                    if (responce.data.resultCode == 0) {
                                        props.unfollow(user.id)
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '62005d27-039f-4c86-85d5-445b3f38c01d'
                                }
                            })
                                .then(responce => {
                                    if (responce.data.resultCode == 0) {
                                        props.follow(user.id)
                                    }
                                })
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;