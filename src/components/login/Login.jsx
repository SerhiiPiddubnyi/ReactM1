import React from "react";
import {reduxForm} from "redux-form";
import {createField, Element} from "../common/formsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/formsControl/FormsControl.module.css"

const Input = Element("input")
const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", [requiredField, maxLength20],
                Input, "email")}
            {createField("Password", [requiredField, maxLength20],
                Input, "password", {}, "", "password")}
            {createField(null, [],
                Input, "rememberMe", {}, "Remember me","checkbox")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols", [requiredField],
                Input, "captcha")}

            {error && <div className={style.formSummaryError}>
                {error}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha,)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})
export default connect (mapStateToProps, { login }) (Login);