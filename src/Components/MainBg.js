import React from "react";
import { BgImg } from "../Style/MainBgCSS";

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

export default MainBg;
