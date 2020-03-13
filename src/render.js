import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redax/State";
import {changeText} from "./Redax/State";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeText = {changeText}/>
        </BrowserRouter>, document.getElementById('root'));
}
