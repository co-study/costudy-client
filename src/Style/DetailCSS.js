import styled from "@emotion/styled";
const StudyContent = styled.div`
  padding: 1.5rem 1.5rem 5rem;
  .sider__arrow {
    border: none;
    background-color: transparent;
    display: flex;
    padding: 0px 60px 0px 0px;
    img {
      width: 40px;
      padding: 0px;
    }
  }
  p {
    font-size: 1.125em;
    line-height: 1.8;
  }
  h3 {
    color: #333;
    font-weight: 700;
  }
`;
const ContentHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;

  .title {
    display: flex;
    font-weight: 700;
    font-size: 2.2em;
    margin-top: 30px;
  }
  .content_user {
    display: flex;
    gap: 10px;
    align-items: center;
    text-align: center;
    margin-top: 40px;
    font-size: 1.2em;
    .user_img {
      display: flex;
      width: 36px;
      height: 36px;
      border: 1.5px solid #858585;
      border-radius: 100%;
      img {
        width: 35px;
      }
    }
    .userName {
      font-weight: 600;
      color: #333;
      margin-right: 10px;
    }
    .RegistrationDate {
      margin-top: 20px;
    }
  }
`;

const ContentDetail = styled.div`
  max-width: 900px;
  margin:0 auto;
  .hopostInfo {
    border-top: 2px solid #e6e6e6;
  }

  .poststatus{
    border-top: 2px solid #e6e6e6;
  }
  .poststatus h3{
    margin-top:30px;
  }
  .status__info {
    display: grid;
    grid-template-columns: repeat(2,3fr);
    row-gap:50px;
    font-size: 20px;
    margin:50px 0px 80px 0;
    padding:0 15px;

    button {
      font-size:0.8em;
      color: #3743ed;
      background-color: white;
      border: 1px solid #3743ed;
      border-radius: 2px;
      padding: 5px 20px 5px 20px;
      &:hover {
        transition: all 300ms;
        background-color: #797fe8;
      }
    }
    .status {
      display: flex;
      align-items:center;
      margin:0px;
        img{
          width:20px;
          height:20px;
          margin-right:20px;
        }
    }
    .status__title {
      display: block;
      width: 200px;
      color: #333;
      font-weight: 700;
    }
    .status__numer {
      margin-right: 80px;
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(1, 6fr);
    }
   }
  .Introduction {
    margin-bottom: 30px;
  }
  .studyIntro {
    border-bottom: 2px solid #e6e6e6;
    padding: 0px 0px 30px 0;
  }

    
  }
`;

const ContentComment = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  textarea {
    resize: none;
    height: 120px;
    font-family: inferit;
    padding: 15px;
    border: 2px solid #b5b5b5;
    border-radius: 10px;
    font-size: 18px;
  }
  label {
    font-weight: bold;
    margin: 0 0 20px;
  }

  .commentButton {
    display: flex;
    justify-content: flex-end;
    margin: 16px 0 24px;
    color: white;

    button {
      font-size: 15px;
      color: white;
      background-color: #3743ed;
      border: 1px solid #3743ed;
      border-radius: 10px;
      padding: 10px 25px 10px 25px;
    }
  }
`;

export { StudyContent, ContentHeader, ContentDetail, ContentComment };
