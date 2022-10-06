import React from "react";



const Card = ({heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;