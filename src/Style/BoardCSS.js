import styled from "@emotion/styled";
const StudyMain = styled.div`
  .main-bg {
    position: relative;
    height: 350px;
    background-repeat: no-repeat;
    background-position: center center;

    .content {
      display: felx;
      text-align: center;
      position: absolute;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      span {
        font-size: 3.9em;
      }
    }
  }
`;

export { StudyMain };
