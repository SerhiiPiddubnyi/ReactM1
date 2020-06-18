import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/formsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/Validators";

const Input = Element("input")
const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"}
                       validate={[requiredField, maxLength10]}
                       component = {Input}
                       name = {"login"}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[requiredField, maxLength10]}
                       component = {Input}
                       name = {"password"}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       component = {Input}
                       name = {"rememberMe"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) =>{

    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
}

export default Login;