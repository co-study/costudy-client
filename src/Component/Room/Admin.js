import React from "react";
import styled from "@emotion/styled";
function Admin() {
  return (
    <div>
      <Search>
        <form class="search">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
          <input type="text" placeholder="회원검색" />
          <button>검색</button>
        </form>
      </Search>
      <Member>
        <div>
          <span>전체회원수</span>
          <span>3명</span>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <input type="checkbox" id="cb1" />
                <label for="cb1"></label>
                <div>noah</div>
                <div>관리자</div>
                <button>추방</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="cb1" />
                <label for="cb1"></label>
                <div>noah</div>
                <div>관리자</div>
                <button>추방</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="cb1" />
                <label for="cb1"></label>
                <div>noah</div>
                <div>관리자</div>
                <button>추방</button>
              </td>
            </tr>
          </table>
        </div>
      </Member>
    </div>
  );
}

const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .search {
    display: flex;
    width: 700px;
    margin: 0px auto;
    position: relative;
    margin: auto 0;

    button {
      width: 100px;
      margin-left: 20px;
      border: 1px solid black;
      border-radius: 7px;
    }
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 2px;
    padding: 10px 50px;
    font-size: 12px;
    box-shadow: 5px 5px 5px -2px rgba(128, 128, 128, 0.66);
  }

  img {
    position: absolute;
    width: 17px;
    top: 10px;
    left: 12px;
    margin: 0;
    cursor: pointer;
  }
`;

const Member = styled.div`
  margin-top: 60px;
  table {
    width: 100%;
    border: 2px solid #dee2e6;
  }
  td {
    border-bottom: 2px solid #dee2e6;
    display: flex;
  }
`;

export default Admin;
