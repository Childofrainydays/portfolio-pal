import React from "react";
import {Link} from "react-router-dom";


function Navi() {
    return (
        <div className="Navi">
        <h1>Portfolio Pal</h1>
        <ul>
            <Link to={"/about"}></Link>
        </ul>
        <ul>
            <Link to={"/portfolio"}></Link>
        </ul>
        <ul>
            <Link to={"/resume"}></Link>
        </ul>
        <ul>
            <Link to={"/contact"}></Link>
        </ul>
        </div>
    );
}

export default Navi;