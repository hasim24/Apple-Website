import React from 'react'
import AppleIcon from "@mui/icons-material/Apple";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


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
            <AppleIcon style={{paddingRight:"10px"}} />
        {links.map((link,index) => (
            <div>
                <a style={{color:"white"}}>{link}</a>
            </div> 
        ))}
            <SearchOutlinedIcon style={{paddingRight:"20px"}}/>
            <ShoppingBagOutlinedIcon/>
    </div>
  )
}

export default TopBar