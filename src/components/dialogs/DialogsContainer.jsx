import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../Redux/dialogs-reduer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        changeTextMessage: (text) => {
            dispatch(changeTextMessageActionCreator(text));
            },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
