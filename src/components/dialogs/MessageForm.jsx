import React from "react";
import {Field, reduxForm} from "redux-form";

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Your message"} component={"textarea"} name = {"text"} />
            </div>
            <div>
                <button >Send!</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form : "message",
}) (Form)

const MessageForm = (props) => {
    const onSubmit = (message) => {
        props.addMessage(message.text);
    }

    return <div>
        <MessageReduxForm onSubmit = {onSubmit}/>
    </div>
}
export default MessageForm;
