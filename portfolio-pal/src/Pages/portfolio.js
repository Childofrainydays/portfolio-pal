import React from "react";
import Navi from "./navi";
import Cards from "../Parts/cards";
import dataBlob from "../Parts/cards.js";

function Portfolio() {
    return (
        <div>
            <Navi />
            <h1>Projects I'm proud of</h1>
            <Cards dataBlob={dataBlob}/>
        </div>
    );
}

export default Portfolio;