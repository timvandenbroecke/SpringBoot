import React, { useState } from "react";
import "./customButton.scss";


export default function CustomButton({onClick, children}) {
    const [color, setColor] = useState("red");
  
    return (
     <div className="custom-button">
            <button type="submit" className="btn btn-white">{children}</button>
     </div>
    );
  }