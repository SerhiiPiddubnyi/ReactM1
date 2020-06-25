import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Setting from "./components/setting/Setting";
import Videos from "./components/videos/Videos"
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>

                    <Route path="/news"
                           component={News}/>
                    <Route path="/setting"
                           component={Setting}/>
                    <Route path="/videos"
                           component={Videos}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export  default compose (
    withRouter,
    connect
    (mapStateToProps, {initializeApp}))(App);
