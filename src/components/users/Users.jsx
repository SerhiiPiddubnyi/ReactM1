import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://images.1plus1.video/actor-1/101/photo.jpg',
                    followed: false,
                    fullName: 'Serhii',
                    status: 'I am fine!',
                    location: {city: 'Dnipro', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://images.1plus1.video/actor-1/101/photo.jpg',
                    followed: true,
                    fullName: 'Vasya',
                    status: 'I am fine!',
                    location: {city: 'Dnipro', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://images.1plus1.video/actor-1/101/photo.jpg',
                    followed: false,
                    fullName: 'Kasya',
                    status: 'I am fine!',
                    location: {city: 'Dnipro', country: 'Ukraine'}
                },
            ])
    }

    return <div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;