import React from "react";
import { Navbar } from "./Style/Heading";
function Heading() {
  return (
    <div>
      <Navbar>
        <div className="navbar_logo">Costudy</div>
        <button className="navbar_login">Login</button>
      </Navbar>
    </div>
  );
}

export default Heading;
