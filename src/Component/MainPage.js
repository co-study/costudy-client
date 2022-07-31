import React from "react";
import MainBg from "./MainBg";
import Input from "./Input";
import List from "./Post/List";
import { Item } from "../Style/MainPageCSS";
function MainPage() {
  return (
    <div>
      <MainBg />
      <Input />
      <Item>
        <List />
      </Item>
    </div>
  );
}

export default MainPage;
