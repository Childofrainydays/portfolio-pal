 import React from "react";
 
function Cards(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={dataBlob.name} src={dataBlob.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                 {dataBlob.name}
              </li>
              <li>
                 {dataBlob.description}
              </li>
            </ul>
          </div>
        </div>
    );
}

export default Cards;