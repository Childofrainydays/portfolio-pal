import React from "react";
import Navi from "./navi";
import {Link} from "react-router-dom";

function Resume() {
    return (
        <div>
            <Navi />
            <h1>My Resume</h1>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>GitHub</li>
                </ul>
                <break></break>
                <h3>See my <Link to="/portfolio">Portfolio</Link> for examples!</h3>
        </div>
    );
}

export default Resume;