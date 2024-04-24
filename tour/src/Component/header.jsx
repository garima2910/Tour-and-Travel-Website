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
        <button style={{borderRadius:"2px"}}>Login</button>
      </div>
    </div>
  );
};

export default Header;
