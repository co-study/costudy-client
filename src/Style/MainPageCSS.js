import styled from "@emotion/styled";

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  .items {
    max-width: 1350px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .box {
    background-color: white;
    margin: 20px 20px 20px 20px;
    cursor: pointer;
    transition: 0.2s ease-in;
    padding: 12px;
    border: solid 1px #f0f0f0;
    border-radius: 5px;
    width: 350px;
    height: 305px;
    transition: all 0.2s ease-in;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 5px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: scale(1.04);
    }
    .title {
      font-size: 1.2em;
      margin: 12px 0 150px 0;
      font-weight: bold;
      @media screen and (max-width: 780px) {
        margin-bottom: 140px;
        font-size: 2em;
      }
    }
    button {
      font-size: 0.7em;
      border: solid 1px #f0f0f0;
      border-radius: 10px;
      padding: 5px 10px;
      color: #474646;
      margin: 0 5px;
      background-color: #e3e3e3;
      @media screen and (max-width: 780px) {
        font-size: 1em;
      }
    }
    .info {
      display: flex;
      font-size: 18px;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
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
        img {
          width: 30px;
        }
      }

      .avatar_Bookmark {
        display: flex;
        align-items: center;
        width: 30px;

        height: 30px;
        img {
          width: 20px;
        }
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
