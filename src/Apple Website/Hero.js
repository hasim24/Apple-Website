import React from 'react'

const Hero = ({item}) => {
  return (
    <div style={{backgroundColor:item.bg,
                 color:item.color,
                 marginBottom:"10px",
                 border:"1px solid black"}}>
        {item.topBar}
        {item.searchicon}
        {item.icon}
        <span style={{fontFamily:"SF Pro Display",
                    fontWeight:"900px",
                    fontSize:"56px"}}>{item.heading}</span>
        <p style={{color:"rgb(173,6,6)"}}>{item.paragraph}</p>
        <p style={{fontFamily:"SF Pro Display",
                    fontWeight:"400",
                    fontSize:"28px"}}>{item.description}</p>
        <a>{item.link1}</a>
        <a>{item.link2}</a>
        <img style={{width:"1330px"}} src={item.img}/>
    </div>
  )
}

export default Hero