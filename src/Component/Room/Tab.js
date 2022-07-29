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
      </Nav>
      <TabInfoItems>
        <Tabcontent 탭={탭} />
      </TabInfoItems>
    </Tabs>
  );
}

function Tabcontent(props) {
  if (props.탭 == 0) {
    return (
      <>
        <div className="comment">
          <button className="noticeBtn">Notice</button>
          <div className="noticetxt">
            <div>
              <span className="infoTitle">공지사항입니다</span>
            </div>
            <div>
              <span className="infoDate">2022/06/30</span>
            </div>
          </div>
        </div>
        <div className="info_list">
          {[1, 2, 3, 4].map((element, index) => {
            return (
              <div className="info_comment">
                <div className="info_user">
                  <div className="user">
                    <img className="userImg" src="./user.png"></img>
                    <div>
                      <span className="userName">noah</span>
                    </div>
                  </div>
                  <div className="usertitle">
                    <div className="text_top">
                      <span>안녕하세요 새로 가입했어요 ㅎㅎ</span>
                    </div>
                    <div className="text_bottom">
                      <span>🖤</span>
                      <span> 1</span>
                    </div>
                  </div>
                </div>
                <div className="commentBtn">
                  <div className="commentInfo">
                    <div>
                      <span>0</span>
                    </div>
                    <div>
                      <span>댓글</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  if (props.탭 == 1) {
    return <div className="comment">내용1</div>;
  }
}

const Tabs = styled.div`
  margin: 0 auto;
  max-width: 900px;
  margin-top: 50px;
  max-width: 800px;

  .nav {
    position:sticky;
    --bs-nav-tabs-border-width: 1.7px;
    margin: 0px 20px;
    --bs-nav-link-color: #474646;
    --bs-nav-link-padding-x: 4.25rem;
    --bs-nav-link-hover-color: #a8a8a8;
  
  .nav-tabs {
   
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-link-active-bg: #f0f0f0;
  }
`;

const TabInfoItems = styled.div`
  .comment {
    margin: 40px 20px;
    display: flex;
  }
  .noticeBtn {
    color: white;
    background-color: #ffda88;
    border: 1px solid white;
    border-radius: 7px;
    padding: 0px 20px;
    margin: 3px 0;
  }
  .noticetxt {
    margin-left: 20px;
  }
  .infoTitle {
    font-size: 1.1em;
    font-weight: 700;
  }
  .infoDate {
    font-size: 0.9em;
  }
  .info_comment {
    display: flex;
    justify-content: space-between;
    border-top: 1.5px solid #e6e6e6;

    align-items: center;
    text-align: center;
  }

  .info_list {
    margin: 0px 20px;
    flex-basis: auto;
  }
  .info_user {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 15px;
    font-size: 1.2em;

    .user {
      display: flex;
      align-items: center;
      margin-right: 50px;
      .userImg {
        width: 35px;
        margin-right: 10px;
      }
    }
  }
  .usertitle {
    text-align: left;
    .text_top {
      font-size: 0.9em;
      color: #474747;
    }
  }
  .text_bottom {
    font-size: 0.77em;
    color: #474747;
    margin-top: 5px;
  }
  .commentBtn {
    width: 120px;
  }
  .commentInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 1px solid #bdbdbd;
    border-radius: 100%;
    span {
      color: #7a7a7a;
      font-size: 0.9em;
      font-weight: 600;
    }
  }
`;
export { Tabs, TabInfoItems };
export default Tab;
