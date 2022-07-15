import styled from "@emotion/styled";

const Navbar = styled.div`
  margin: 0 auto;
  max-width: 1100px;
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
