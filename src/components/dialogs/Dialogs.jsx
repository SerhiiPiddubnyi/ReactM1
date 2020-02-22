import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className= {style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to = '/dialogs/1'>Vasya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/2'>Ivasya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/3'>Kasya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/4'>Vasya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/5'>Ivasya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to = '/dialogs/6'>Kasya</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.dialog}>Hi!</div>
                <div className={style.dialog}>How are you?</div>
                <div className={style.dialog}>I am fine!</div>
            </div>
        </div>
    );
}

export default Dialogs;
