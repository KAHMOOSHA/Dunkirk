import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [icon, setIcon] = useState("☲");
  const change = () => {
    if(icon === "☲"){
      setIcon("☵");
    }else{
      setIcon("☲")
    }
  };
  return (
    <header className="nav__bar">
      <div className="logo">Dunkirk</div>
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <div className="side__menu">
        <button className="ss">Here We Are</button>
        <div onClick={change} className="burger__menu">
          {icon}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
