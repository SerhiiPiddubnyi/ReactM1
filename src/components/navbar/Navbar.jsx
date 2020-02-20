import React from "react";
import style from './Navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={style.nav}>
            <div className= {`${style.item} ${style.active}`} >
                <a>Main menu</a>
            </div>
            <div className= {`${style.item} ${style.active}`}>
                <a>Messages</a>
            </div>
            <div className= {`${style.item} ${style.active}`}>
                <a>News</a>
            </div>
            <div className= {`${style.item} ${style.active}`}>
                <a>Videos</a>
            </div>
            <div className= {`${style.item} ${style.active}`}>
                <a>Setting</a>
            </div>
        </nav>
    );
}

export  default Navbar;