import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./messageItem/MesageItem";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        alert(newMessage.current.value)
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
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>OK!</button>
            </div>
        </div>
    );
}
export default Dialogs;
