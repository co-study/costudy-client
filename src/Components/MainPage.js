import React from "react";
import MainBg from "./MainBg";
import Input from "./Input";
import { Item } from "../Style/MainPageCSS";
function MainPage() {
  return (
    <div>
      <MainBg />
      <Input />
      <Item>
        {[1, 2, 3, 4, 5, 6].map((element, idx) => {
          return (
            <div className="box" key={idx}>
              <p className="title">{element}</p>
              <button>코딩테스트</button>
              <button>서울</button>
              <button>모집중</button>
              <hr />
              <div className="info">
                <div className="avatar_user">
                  <img style={{ width: "30px" }} src="/user.png"></img>
                  <span>noah</span>
                </div>
                <div className="avatar_Bookmark">
                  {" "}
                  <img style={{ width: "30px" }} src="/ribon.png"></img>
                </div>
              </div>
            </div>
          );
        })}
      </Item>
    </div>
  );
}

export default MainPage;
