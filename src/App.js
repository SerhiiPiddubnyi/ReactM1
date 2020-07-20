import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";
import store from "./Redux/redux-store";
import withSuspense from "./hoc/WithSuspense";

const News = React.lazy(() => import("./components/news/News"))
const Setting = React.lazy(() => import("./components/setting/Setting"))
const Video = React.lazy(() => import("./components/videos/Videos"))
// import News from "./components/news/News";
// import Setting from "./components/setting/Setting";
// import Videos from "./components/videos/Videos"

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
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
                           render={withSuspense(News)}/>
                    <Route path="/setting"
                           render={withSuspense(Setting)}/>
                    <Route path="/videos"
                           render={withSuspense(Video)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const ContainerApp = compose(
    withRouter,
    connect
    (mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <ContainerApp/>
        </ Provider>
    </BrowserRouter>;
}

export default MainApp;