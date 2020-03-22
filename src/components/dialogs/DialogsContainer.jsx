import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../Redux/dialogs-reduer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let changeTextMessage = (text) => {
        props.store.dispatch(changeTextMessageActionCreator(text));
    }

    return (<Dialogs changeTextMesage = {changeTextMessage}
                     addMessage = {addMessage}
                     store = {state.dialogsPage}/> );
}
export default DialogsContainer;
