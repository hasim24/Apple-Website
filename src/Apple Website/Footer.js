import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Footer = () => {

    const paragraphStyle = {
        color:"#6E6E73",
        fontFamily:"SF Pro Text",
        paddingLeft:"300px",
        padding:"1px 0px 9.594px 0px",
        fontSize:"12px",
        fontStyle:"normal",
        fontWeight:"400px",
        textAlign:"left",
        lineHeight:"1.5",
        }

    const divStyle ={
        backgroundColor:"#fcfbfb",
        paddingTop:"10px",
        display:"flex",
        width:"980px",
        height:"14px",
        justifyContent:"center",
    }
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

        </p>
    </div>
  )
}

export default Footer