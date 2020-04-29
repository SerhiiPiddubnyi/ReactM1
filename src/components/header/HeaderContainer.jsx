import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {AuthAPI} from "../../api/Api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAPI.authMe()
            .then(responce => {
                if (responce.resultCode === 0) {
                    let {id, email, login} = responce.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render(){
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state) => ( {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
} )

export  default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);