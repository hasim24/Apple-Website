import React from 'react'

const Footer = () => {

    const items = ["Store","Mac","iPad","iPhone","AirPods","TV & Home","AirTag","Accessories","Gift Card"]
    const services = ["Apple Music","Apple TV+","Apple Fitness+","Apple News+","Apple Arcade","iCloud","Apple One","Apple Card","Apple Books","Apple Podcasts","Apple Store"]
    const accounts = ["Manage Your Apple ID","Apple Store Account","iCloud.com"]
    const appleStore = ["Find a Store","Genius Bar","Today at Apple","Apple Camp","Apple Store App","Refurbished and Clearence","Financing","Apple Trade In","Order Status","Shopping Help"]
    const buisness = ["Apple and Buisness","Shop for Buisness"]
    const education = ["Apple and Education","Shop for K-12","Shop for College"]
    const healthCare = ["Apple in Healthcare","Health on Apple Watch","Health Records on iPhone"]
    const government = ["Shop for Government","Shop for Veterans and Military"]
    const values = ["Accessability","Education","Enviroinment","Inclusion and Diversity","Privacy","Racial Equity and Justice","Supplier Responsibility"]
    const aboutApple = ["Newsroom","Apple Leadership","Career Oppurtunities","Investors","Ethics and Compliance","Events","Contact Apple"]

    const headStyle = {color:"black",fontWeight:"bolder",display:"flex",marginRight:"100px"}

    const anchorlinks = ["Privacy Policy |","Terms of Use |","Sales and Refunds |","Legal |","Site Map"]


    const paragraphStyle = {
        color:"#6E6E73",
        width:"980px",
        fontFamily:"SF Pro Text",
        paddingLeft:"300px",
        padding:"1px 0px 9.594px 0px",
        fontSize:"12px",
        fontStyle:"normal",
        fontWeight:"400",
        textAlign:"left",
        lineHeight:"1.5",
        }
    const divStyle ={
        backgroundColor:"#fcfbfb",
        paddingTop:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    const anchorStyle = {
        fontSize:"13px",
        paddingLeft:"0px",
        paddingRight:"0px",
    }

    const year = new Date();

    
  return (
    <div style={divStyle}>
        <p style={paragraphStyle}>1. iPhone 8 or later users may subscribe without an apple watch later this fall.<br/>
            A subscription is required for apple Fitness.<br/>
            Apple Fitness+ requires iOS 14.3 or later, Watch OS 7.2 or later and tvOS 14.3 or later.<br/>
            To get the newest features, make sure youre device are running latest software version.<br/>
            To access and use all the feature of Apple Card, you must add Apple Card to walleton an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest<br/>
            version by going to settings  General  software update. Tap download and install.<br/>
            Available for qualifying applicants in te US.<br/>
            Apple Card is used by Goldmann Sachs Bank USA, Salt Lake City Branch.<br/>
            Learn more about how Apple Card applications are evaluated at <strong>support.apple.com/kb/HT209218</strong>
        <hr style={{width:"980px"}}/>
        <div style={{display:"flex"}}>
            <div>
            <h4 style={headStyle}>Shop and Learn</h4>
            {items.map((item,index) => (
                <li key={index} style={{listStyle:"none"}}>{item}</li>
            ))}
            </div>
            <div>
            <h4 style={headStyle}>Services</h4>
            {services.map((service,index) => (
                <li key={index} style={{listStyle:"none"}} >{service}</li>
            ))}
            <h4 style={headStyle}>Accounts</h4>
            {accounts.map((account,index) => (
                <li key={index} style={{listStyle:"none"}}>{account}</li>
            ))}
            </div>
            <div>
                <h4 style={headStyle}>Apple Store</h4>
                {appleStore.map((store,index) => (
                    <li key={index} style={{listStyle:"none"}}>{store}</li>
                ))}
            </div>
            <div>
                <h4 style={headStyle}>For Buisness</h4>
                {buisness.map((item,index) => (
                    <li key={index} style={{listStyle:"none"}}>{item}</li>
                ))}
                <h4 style={headStyle}>For Education</h4>
                {education.map((item,index) => (
                    <li key={index} style={{listStyle:"none"}}>{item}</li>
                ))}
                <h4 style={headStyle}>For Healthcare</h4>
                {healthCare.map((item,index) => (
                    <li key={index} style={{listStyle:"none"}}>{item}</li>
                ))}
                <h4 style={headStyle}>For Government</h4>
                {government.map((item,index) => (
                    <li key={index} style={{listStyle:"none"}}>{item}</li>
                ))}
            </div>
            <div>
                <h4 style={headStyle}>Apple Values</h4>
                {values.map((value,index) => (
                    <li key={index} style={{listStyle:"none"}}>{value}</li>
                ))}
                <h4 style={headStyle}>About Apple</h4>
                {aboutApple.map((about,index) => (
                    <li key={index} style={{listStyle:"none"}}>{about}</li>
                ))}
            </div>
        </div>
        <div>
               <p style={{fontSize:".8rem",paddingTop:"20px"}}> More Ways to Shop : <a style={anchorStyle} href='http://localhost:3000/'>Find an Apple Store</a> or <a style={anchorStyle} href='http://localhost:3000/'>Other Retailer</a> near you. Or Call 1-800-MY-APPLE</p>
                <hr/>
                <p style={{fontSize:".8rem",display:"flex",letterSpacing:"1px",fontWeight:"bolder"}} >Copyright  &copy;  {year.getFullYear()}  Apple  Inc. All  rights  reserved.              
                <div style={{paddingLeft:"80px"}}>{anchorlinks.map((link,index) => (
                    <a key={index} href='http://localhost:3000/' style={{...anchorStyle,color:"black",
                                              paddingRight:"7px",
                                              fontSize:"14px",}}>{link}</a>
                ))}</div> 
                </p>
                
        </div>
        </p>
        
    </div>
    
  )
}

export default Footer