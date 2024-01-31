import React from "react";




const Card = ({ description, name, paragraph, link1, link2, bg, img, color, iconimg }) => {
  return (
  
  <div  className="header" 
       style={{backgroundColor:bg, 
               color: color,
               marginBottom:"10px",
               marginTop:"10px",
               border:"1px solid black",
               paddingTop:"15px"}}>

    <span>{name}</span>
    <p className="series">{paragraph}</p>
    <img src={iconimg} style={{}}/>
    <p className="description">{description}</p>

    <a>{link1}</a>
    <a>{link2}</a>
    <img src={img} className="image" alt="Watch"  />
  </div>
      
  );
};

export default Card;
