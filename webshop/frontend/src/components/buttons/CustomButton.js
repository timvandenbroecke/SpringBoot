import React, { useState } from "react";
import "./customButton.scss";


export default function CustomButton({onClick, style, children}) {
    const [color, setColor] = useState("red");
  
    return (
     <div className="custom-button" style={style}>
            <button type="submit" className="btn btn-white" onClick={onClick}>{children}</button>
     </div>
    );
  }