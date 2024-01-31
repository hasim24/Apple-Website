import React from 'react'
// import AppleIcon from "@mui/icons-material/Apple";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import appleIcon from './images/appleicon.png'


const TopBar = () => {
    const links = ["Store","Mac","iPad","iPhone","Watch","AirPods","TV & Home","Only on Apple","Accessories","Support"]
  return (
    <div style={{backgroundColor:"black",
                 color:"white",
                 display:"flex",
                 alignItems:"center",
                 justifyContent:"center",
                 height:"80px",
                 marginBottom:"10px"}}>
            {/* <AppleIcon style={{paddingRight:"10px"}} /> */}
            <img style={{width:"35px",height:"35px",backgroundColor:"white"}} src={appleIcon} alt='apple'/>
        {links.map((link,index) => (
            <div>
                <a key={index} style={{color:"white"}} href='http://localhost:3000/'>{link}</a>
            </div> 
        ))}
            <SearchOutlinedIcon style={{paddingRight:"20px"}}/>
            <ShoppingBagOutlinedIcon/>
    </div>
  )
}

export default TopBar