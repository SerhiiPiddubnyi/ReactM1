import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/formsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/Validators";

const maxLength10 = maxLengthCreator(10)
const  Textarea = Element("textarea")

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Your message"}
                       validate={[requiredField, maxLength10]}
                       component={Textarea}
                       name = {"text"}
                />
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
