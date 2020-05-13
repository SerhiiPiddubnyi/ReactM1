import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./messageItem/MesageItem";
import DialogItem from "./dialogItem/DialogItem";
import MessageForm from "./MessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id}
                                                                              name={dialog.name}
                                                                              id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <MessageItem key={message.id}
                                                                                  message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <MessageForm {...props}/>
            </div>
        </div>
    )

}
export default Dialogs;
