import React from "react";




const Card = ({ description, name, paragraph, link1, link2, bg, img, color, icon, iconimg }) => {
  return (
  
  <div  className="header" 
       style={{backgroundColor:bg, 
               color: color,
               marginBottom:"10px",
               marginTop:"10px",
               border:"1px solid black",
               paddingTop:"15px"}}>

    {icon} 
    <span>{name}</span>
    <p className="series">{paragraph}</p>
    <img src={iconimg} alt=""/>
    <p className="description">{description}</p>

    <a href="http://localhost:3000/">{link1}</a>
    <a href="http://localhost:3000/">{link2}</a>
    <img src={img} className="image" alt="Watch"  />
  </div>
      
  );
};

export default Card;
