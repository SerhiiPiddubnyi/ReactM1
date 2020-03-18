import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./messageItem/MesageItem";
import DialogItem from "./dialogItem/DialogItem";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../Redax/dialogs-reduer";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let changeTextMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(changeTextMessageActionCreator(text));
    }

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem key = {dialog.id}
                                                                  name={dialog.name}
                                                                  id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message => <MessageItem key = {message.id}
                                                                      message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newMessage} onChange={changeTextMessage} value = {props.state.textForNewMessage}/>
                <button onClick={addMessage}>OK!</button>
            </div>
        </div>
    );
}
export default Dialogs;
