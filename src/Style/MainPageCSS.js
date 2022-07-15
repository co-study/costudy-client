import styled from "@emotion/styled";

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;

  .box {
    max-width: 1100px;
    background-color: white;
    margin: 20px 20px 20px 20px;
    cursor: pointer;
    transition: 0.2s ease-in;
    padding: 10px;
    border: solid 1px #f0f0f0;
    border-radius: 5px;
    width: 300px;
    transition: all 0.2s ease-in;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 5px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: scale(1.04);
    }
    .title {
      font-size: 1.2em;
      margin: 15px 0 100px 0;
      font-weight: bold;
    }
    button {
      font-size: 0.5em;
      border: solid 1px #f0f0f0;
      border-radius: 10px;
      padding: 5px;
      color: #474646;
      margin: 0 5px;
      background-color: #e3e3e3;
    }
    .info {
      display: flex;
      font-size: 18px;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .avatar_user {
        display: flex;
        align-items: center;
        margin-left: 5px;
        width: 36px;
        height: 36px;
        span {
          margin-left: 10px;
          font-weight: 700;
        }
      }

      .avatar_Bookmark {
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;
      }
    }
    @media screen and (max-width: 780px) {
      padding: 68px 40px 27px 30px;
      height: 400px;
      width: 100%;
    }
  }
`;

export { Item };
