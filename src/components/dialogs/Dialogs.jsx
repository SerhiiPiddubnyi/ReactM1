import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <Dialog name="Vasya" id="1"/>
                <Dialog name="Kasya" id="2"/>
                <Dialog name="Ivasya" id="3"/>
                <Dialog name="Tasya" id="4"/>
                <Dialog name="Masya" id="5"/>
                <Dialog name="Pasya" id="6"/>

            </div>
            <div className={style.messages}>
                <Message message = "Hi!"/>
                <Message message = "How are you?"/>
                <Message message = "I am fine!"/>
            </div>
        </div>
    );
}
export default Dialogs;
