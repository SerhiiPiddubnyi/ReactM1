import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className={style.nav}>
            <div className= {style.item} >
                <NavLink to="/profile" activeClassName= {style.active}>Profile</NavLink>
            </div>
            <div className= {style.item}>
                <NavLink to="/dialogs" activeClassName= {style.active}>Messages</NavLink>
            </div>
            <div className= {style.item}>
                <NavLink to="/news" activeClassName= {style.active}>News</NavLink>
            </div>
            <div className= {style.item}>
                <NavLink to= "/videos" activeClassName= {style.active}>Videos</NavLink>
            </div>
            <div className= {style.item}>
                <NavLink to= "/setting" activeClassName= {style.active}>Setting</NavLink>
            </div>
        </nav>
    );
}

export  default Navbar;