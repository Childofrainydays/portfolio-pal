import React from "react";



export default function Cards({dataBlob}) {
  return (
    <div>
        <div className="card">
        <div className="img-container">
        {dataBlob.map((data) => (
        <h4>{data.ProjectName}</h4>
      ))}
      </div>
    </div>
    </div>
  );
}