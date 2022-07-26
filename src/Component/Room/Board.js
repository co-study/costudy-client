import React, { useState } from "react";
import Tab from "./Tab";

import img1 from "../../Component/Room/Imgs/background1.png";
import img2 from "../../Component/Room/Imgs/background2.jpg";
import img3 from "../../Component/Room/Imgs/background3.jpg";
import img4 from "../../Component/Room/Imgs/background4.png";
import img5 from "../../Component/Room/Imgs/background5.png";
import img6 from "../../Component/Room/Imgs/background6.jpg";
import img7 from "../../Component/Room/Imgs/background7.jpg";
import img8 from "../../Component/Room/Imgs/background8.png";
import img9 from "../../Component/Room/Imgs/background9.jpg";
import img11 from "../../Component/Room/Imgs/background11.png";

import { StudyMain } from "../../Style/BoardCSS";

function Board() {
  const backgroundArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img11,
  ];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];

  return (
    <>
      <StudyMain>
        <div
          className="main-bg"
          style={{ backgroundImage: "url(" + backgroundImg + ")" }}
        >
          <div className="content">
            <span>데이터베이스 인터널스 북 스터디</span>
          </div>
        </div>
      </StudyMain>
      <Tab />
    </>
  );
}

export default Board;
