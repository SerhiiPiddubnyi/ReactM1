import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./messageItem/MesageItem";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = (props) => {
    let store = props.store;
    let newMessageArea = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let changeTextMessage = (e) => {
        let text = e.target.value;
        props.changeTextMesage(text);
    }

    let dialogsElements = store.dialogs.map(dialog => <DialogItem key={dialog.id}
                                                                        name={dialog.name}
                                                                        id={dialog.id}/>);
    let messagesElements = store.messages.map(message => <MessageItem key={message.id}
                                                                            message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newMessageArea} onChange={changeTextMessage} value={store.textForNewMessage}/>
                <button onClick={addMessage}>Send!</button>
            </div>
        </div>
    );
}
export default Dialogs;
