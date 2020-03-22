import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Setting from "./components/setting/Setting";
import Videos from "./components/videos/Videos"
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/setting" component={Setting}/>
                <Route path="/videos" component={Videos}/>
            </div>
        </div>
    )
}

export default App;
