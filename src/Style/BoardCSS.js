import styled from "@emotion/styled";
const StudyMain = styled.div`
  .main-bg {
    position: relative;
    height: 350px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;

    .content {
      display: felx;
      text-align: center;
      position: absolute;
      margin: 0 auto;
      width: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      span {
        font-family: "Chosunilbo_myungjo";
        color: #474646;
        letter-spacing: 10px;
        line-height: 100px;
        font-size: 4em;
      }
      @media screen and (max-width: 780px) {
        width: 100%;
        font-size: 0.8em;
      }
    }
  }
`;

export { StudyMain };
