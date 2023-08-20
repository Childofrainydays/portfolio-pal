import React from "react";
import {Link} from "react-router-dom";


function Navi() {
    return (
        <header>
        <h1>Rayne Burk</h1>
        <div className="Navi">
        <ul>
            <li>
                <Link to={"/about"}>About Me</Link>
            </li>
            <li>
                <Link to={"/portfolio"}>My Portfolio</Link>
            </li>
            <li>
                <Link to={"/resume"}>My Resume</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact Me</Link>
            </li>
        </ul>
        </div>
    </header>
    );
}

export default Navi;