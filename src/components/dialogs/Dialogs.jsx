import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./message/MesageItem";



const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Kasya'},
        {id: 3, name: 'Ivasya'},
        {id: 4, name: 'Tasya'},
        {id: 5, name: 'Masya'},
        {id: 6, name: 'Pasya'},
    ];

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine!'},
    ];
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map(message => <MessageItem message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;
