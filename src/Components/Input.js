import React from "react";

import { Search } from "../Style/InputCSS";

function Input() {
  return (
    <div>
      <Search>
        <form class="search">
          <input type="text" placeholder="키워드를 통해 스터디를 찾아보세요!" />
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </form>
      </Search>
    </div>
  );
}

export default Input;
