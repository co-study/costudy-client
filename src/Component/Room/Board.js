import React from "react";
import img1 from "../../Component/Room/Imgs/background1.jpg";
import img2 from "../../Component/Room/Imgs/background2.jpg";
import img3 from "../../Component/Room/Imgs/background3.jpg";
import img4 from "../../Component/Room/Imgs/background4.jpg";
import img5 from "../../Component/Room/Imgs/background5.jpg";
import img6 from "../../Component/Room/Imgs/background6.jpg";
import img7 from "../../Component/Room/Imgs/background7.jpg";
import img8 from "../../Component/Room/Imgs/background8.jpg";
import img9 from "../../Component/Room/Imgs/background9.jpg";
import img10 from "../../Component/Room/Imgs/background10.jpg";

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
    img10,
  ];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];
  return (
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
    // return <img src={backgroundImg}></img>;
  );
}
export default Board;
