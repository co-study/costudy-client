import React from "react";

import styled from "@emotion/styled";
function MainBg() {
  return (
    <div>
      <BgImg>
        <div id="mainBg">
          <div className="home_title">
            <div>
              <div className="home_title1">
                개발자 <br />
                스터디는
                <br />
              </div>
              <div className="home_title2">Costudy</div>
            </div>
          </div>
          <div className="home_icon">
            <img src="/laptop.png" className="home_avator"></img>
          </div>
        </div>
      </BgImg>
    </div>
  );
}


const BgImg = styled.div`
background-color: #3743ed;
#mainBg {
  display: flex;
  width:100%;
  margin: 0px auto;
  height: 350px;
  padding: 0 20px;
  align-items: center;
    @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
   }
  }
  .home_title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    @media screen and (max-width: 560px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align:center;
    }
  }
    .home_title1 {
      flex: 1 1;
      color: white;
      font-size: 2.5em;
      margin: auto 0; 
      @media screen and (max-width: 560px) {
        height:100px;
        font-size: 28px;
        text-align: center;
      padding-top:50px;  
      }
    }
    .home_title2 {
      color: white;
      font-size: 5em;
      @media screen and (max-width: 560px) {
        font-size: 50px;
        text-align: center;
        margin-bottom:20px;
      }
    }
  .home_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
  }
    .home_avator{
      width:200px;
      @media screen and (max-width: 560px) {
        width:120px;
        margin-bottom:40px;
      }
    }
`;

export { BgImg };


export default MainBg;
