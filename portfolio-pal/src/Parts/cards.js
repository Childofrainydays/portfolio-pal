 import React from "react";
 
function Cards(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                 {props.name}
              </li>
              <li>
                 {props.occupation}
              </li>
            </ul>
          </div>
        </div>
    );
}

export default Cards;