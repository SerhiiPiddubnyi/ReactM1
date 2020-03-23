import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../Redux/dialogs-reduer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let changeTextMessage = (text) => {
                        store.dispatch(changeTextMessageActionCreator(text));
                    }
                    return <Dialogs changeTextMesage={changeTextMessage}
                                    addMessage={addMessage}
                                    store={state.dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    );
}
export default DialogsContainer;
