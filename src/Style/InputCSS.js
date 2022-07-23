import styled from "@emotion/styled";

const Search = styled.div`
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  padding: 40px;

  .search {
    width: 35%;
    margin: 0px auto;
    position: relative;
    margin: auto 0;
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
