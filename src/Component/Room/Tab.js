import React, { useState } from "react";
import styled from "@emotion/styled";
import { Nav } from "react-bootstrap";
function Tab() {
  let [탭, 탭변경] = useState(0);

  return (
    <Tabs>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            Info
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            회원관리
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            *
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tabcontent 탭={탭} />
    </Tabs>
  );
}

function Tabcontent(props) {
  if (props.탭 == 0) {
    return <div className="comment">내용0</div>;
  }
  if (props.탭 == 1) {
    return <div className="comment">내용1</div>;
  }
  if (props.탭 == 2) {
    return <div className="comment">😊</div>;
  }
  if (props.탭 == 3) {
    return <div className="comment">내용3</div>;
  }
}

const Tabs = styled.div`
  margin: 0 auto;
  max-width: 900px;
  margin-top: 50px;

  .nav {
    --bs-nav-link-color: #474646;
    --bs-nav-link-padding-x: 4.25rem;
    --bs-nav-link-hover-color: #a8a8a8;
  }
  .nav-tabs {
    --bs-nav-tabs-border-width: 1.3px;
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-link-active-bg: #f0f0f0;
  }
`;
export { Tabs };
export default Tab;
