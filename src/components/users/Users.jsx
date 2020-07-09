import React from "react";
import Paginator from "./Paginator";
import User from "./User";

const Users = (props) => {

    return <div>
        <Paginator {...props}/>
        {props.users.map(user => <User user={user}
                                       followingProgress={props.followingProgress}
                                       following={props.following}/>)}
    </div>
}

export default Users;