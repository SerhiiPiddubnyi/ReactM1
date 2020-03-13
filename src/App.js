import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Setting from "./components/setting/Setting";
import Videos from "./components/videos/Videos"
import {Route} from "react-router-dom";
import {changeText} from "./Redax/State";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path="/" render={() => <Profile state={props.state.profilePage}
                                                             addPost={props.addPost}
                                                             changeText = {props.changeText}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              changeText = {props.changeText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/setting" component={Setting}/>
                <Route path="/videos" component={Videos}/>
            </div>
        </div>
    )
}

export default App;
