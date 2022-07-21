import styled from "@emotion/styled";
const StudyContent = styled.div`
  padding: 1.5rem 1.5rem 5rem;
  .sider__arrow {
    display: flex;
    padding: 0px 60px 0px 0px;
    button {
      background-color: white;
      border: none;
    }
  }

  img {
    width: 50px;
    padding: 8px;
  }

  #content_comment {
    width: 200px;
    padding: 200px;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    font-size: 1.125em;
    margin: 20px;
  }
  p {
    font-size: 1.125em;
    line-height: 1.8;
  }
`;
const ContentHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 50px;
  margin-top: 50px;
  flex-direction: column;

  .title {
    display: flex;
    font-weight: 700;
    font-size: 2.2em;
  }
  .content_user {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 40px;
  }
  .userImg {
    width: 50px;
  }

  .RegistrationDate {
    margin-top: 20px;
  }
`;

const ContentDetail = styled.div`
  max-width: 900px;
  margin: auto;
  .postInfo {
    padding: 20px 0px 20px 0;
    border-top: 2px solid #e6e6e6;
  }
  .status__info {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    font-weight: 700;
    font-size: 20px;
    color: #333;
    button {
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
    }
    .status__title {
      display: block;
      width: 200px;
    }
    .status__numer {
      margin-right: 80px;
    }
    #3743ed @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 2fr);
    }
  }
  .Introduction {
    margin-bottom: 30px;
  }
  .studyIntro {
    border-bottom: 2px solid #e6e6e6;
    padding: 0px 0px 30px 0;
  }
  .studyInfo {
    padding: 50px 0 50px 0;
    .iconImg {
      padding: 20px 10px;
    }
  }
  .iconImg {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 30px;
    }
    .iconImgTxt {
      width: 100px;
      margin-right: 40px;
      span {
        color: #717171;
        font-size: 20px;
        font-weight: 700;
      }
    }
    div span {
      font-weight: 700;
      font-size: 20px;
      color: #333;
    }
  }
`;

const ContentComment = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;

  textarea {
    min-height: 100px;
    resize: none;
  }
  label {
    font-weight: bold;
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
