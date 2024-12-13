import React from "react";
import './NavBar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

export default function NavBar(){

    return(
        <>
           <nav>
            <div className="navItems-left">
                <div className="logo">
                    <a href="">
                        <img src="https://static-assets-prod.epicgames.com/epic-store/static/webpack/../favicon.ico" alt="" />
                            <KeyboardArrowDownIcon/>
                    </a>
                </div>
                <a className="active" href=""><img src="https://cms-assets.unrealengine.com/qAiDvosPSFGqJxTVuY7h" alt="" /></a>
                <a href="">Support</a>
                <a className="drop-down" href="">Distribute<KeyboardArrowDownIcon/></a>
            </div>
            <div className="navItems-right">
                <a href=""><LanguageIcon/></a>
                <a href="">Sign in</a>
                <a href="">Download</a>
            </div>
           </nav>
        </>
    )
}
