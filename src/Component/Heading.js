import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
function Heading() {
  return (
    <div>
      <Navbar>
        <Link to="/">
          <div className="navbar_logo">Costudy</div>
        </Link>
        <Link to="/login">
          <button onClick={(e) => {}} className="navbar_login">
            Login
          </button>
        </Link>
      </Navbar>
    </div>
  );
}

const Navbar = styled.div`
a {
  color: black;
  text-decoration: none}
  margin: 0 auto;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 15px 0px 15px;
  .navbar_logo {
    color: #3743ed;
    font-weight: 700;
    font-size: 1.3em;
  }
    .navbar_login {
      background-color: black;
      color: white;
      border-radius: 2px;
      padding: 2px 20px;
      box-shadow: 5px 4px 4px -2.5px rgba(128, 128, 128, 0.5);
    }
  }
`;
export { Navbar };

export default Heading;
