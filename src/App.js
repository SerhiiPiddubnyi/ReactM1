import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Setting from "./components/setting/Setting";
import  Videos from "./components/videos/Videos"

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path = "/" component={Profile}/>
                    <Route path = "/profile" component={Profile}/>
                    <Route path = "/dialogs" component={Dialogs}/>
                    <Route path = "/news" component={News}/>
                    <Route path = "/setting" component={Setting}/>
                    <Route path = "/videos" component={Videos}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
