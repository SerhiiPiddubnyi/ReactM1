import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../Redux/dialogs-reduer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;
