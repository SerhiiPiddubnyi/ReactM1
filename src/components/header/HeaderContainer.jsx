import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {letsAuthMe, setAuthUserData} from "../../Redux/auth-reducer";
import {AuthAPI} from "../../api/Api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.letsAuthMe();
    }

    render(){
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state) => ( {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
} )

export  default connect (mapStateToProps, {letsAuthMe})(HeaderContainer);