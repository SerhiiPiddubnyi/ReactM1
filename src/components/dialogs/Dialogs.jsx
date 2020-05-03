import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./messageItem/MesageItem";
import DialogItem from "./dialogItem/DialogItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let newMessageArea = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let changeTextMessage = (e) => {
        let text = e.target.value;
        props.changeTextMessage(text);
    }

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id}
                                                                              name={dialog.name}
                                                                              id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <MessageItem key={message.id}
                                                                                  message={message.message}/>)

    if (!props.isAuth) {
        return <Redirect to ={"/login"}/>
    }

        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <textarea ref={newMessageArea} onChange={changeTextMessage}
                              value={props.dialogsPage.textForNewMessage}/>
                    <button onClick={addMessage}>Send!</button>
                </div>
            </div>
        )

}
export default Dialogs;
