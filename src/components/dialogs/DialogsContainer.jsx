import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../Redux/dialogs-reduer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

