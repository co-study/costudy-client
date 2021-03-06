import React from "react";
import styled from "@emotion/styled";

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

const Search = styled.div`
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  padding: 40px 20px;

  .search {
    display: flex;
    width: 500px;
    position: relative;
    @media screen and (max-width: 780px) {
      width: 380px;
    }
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 12px;
    box-shadow: 5px 5px 5px -2px rgba(128, 128, 128, 0.66);
  }

  img {
    position: absolute;
    width: 17px;
    top: 8px;
    right: 12px;
    margin: 0;
    cursor: pointer;
  }
`;

export { Search };
export default Input;
