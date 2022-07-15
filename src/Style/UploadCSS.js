import styled from "@emotion/styled";

const Editor = styled.div`
  text-align: center;

  .movie-container {
    margin: 0 auto;
    width: 80%;
    border: 1px solid #333;
    padding: 10px 0 30px 0;
    border-radius: 5px;
    margin-bottom: 50px;
  }

  .form-wrapper {
    width: 60%;
    margin: 0 auto;
  }

  .title-input {
    width: 500px;
    height: 40px;
    margin: 10px;
  }

  .submit-button {
    width: 100px;
    height: 30px;
    color: white;
    font-size: 20px;
    font-size: 1em;
    border: none;
    background: #3743ed;
    border-radius: 5px;
    margin-top: 30px;
    text-align: center;
    position: relative;
    left: 400px;
  }

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
  }
`;
export { Editor };
