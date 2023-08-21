import React from "react";
import Navi from "./navi";
import Cards from "../Parts/cards";
import dataBlob from "../Parts/dataBlob.js";

function Portfolio() {
    return (
        <div className="project-box">
            <Navi />
            <h1>Projects I'm proud of</h1>
            <Cards dataBlob={dataBlob}/>
        </div>
    );
}

export default Portfolio;