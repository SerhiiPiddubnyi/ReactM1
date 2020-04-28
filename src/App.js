import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Setting from "./components/setting/Setting";
import Videos from "./components/videos/Videos"
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer />}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer />}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>

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

export default App;
