import React from "react";
import { FiGlobe } from "react-icons/fi";

const Header = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}} >
      <div style={{display:"flex"}}>
        <FiGlobe style={{padding:"25px",color:"skyblue"}}/>
        <h4>TRAVEL THE WORLD</h4>
      </div>
      <div style={{paddingRight:"30px",display:"flex"}}>
        <ul style={{listStyleType: "none",display:"flex"}}>
            <li style={{padding:"10px"}}>Home</li>
            <li style={{padding:"10px"}}>About</li>
            <li style={{padding:"10px"}}>Packages</li>
            <li style={{padding:"10px"}}>Contact</li>
        </ul>
        <div style={{padding:"15px"}}>
        <button style={{borderRadius:"15px",color:"white",backgroundColor:"#46B6F5" ,padding:"10px",width:"100px"}}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
