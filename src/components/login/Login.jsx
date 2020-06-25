import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/formsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/formsControl/FormsControl.module.css"

const Input = Element("input")
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       validate={[requiredField, maxLength20]}
                       component = {Input}
                       name = {"email"}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={"password"}
                       validate={[requiredField, maxLength20]}
                       component = {Input}
                       name = {"password"}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       component = {Input}
                       name = {"rememberMe"}/> Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, { login }) (Login);