import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingProgress, following}) => {

    return <div key={user.id}>
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
                        ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            following(user.id, "unfollow");
                        }}>Unfollow</button>
                        : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            following(user.id, "follow");
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
        </div>
}

export default User;