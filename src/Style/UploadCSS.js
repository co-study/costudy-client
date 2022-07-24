import styled from "@emotion/styled";

const Editor = styled.div`
padding: 1.6rem 1.5rem 5rem;
input , select{
  border-style: none;
}
.selected{
  max-width: 900px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
}
select{
  width:100px;
   height :41px;
   font-size : 20px;
   color :  #333;
   margin-bottom:20px;
  
  
}
.slectedOption{
  width:50%;
  border-bottom: 1.5px solid #e6e6e6;
}
  .form-wrapper {
    display:flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
  }
  .title-input {
    font-size : 35px;
    width: 100%;
    height: 40px;
    margin: 35px 0px;
    outline: none;
    
  }

  .submit-button {
    display:flex;
    justify-content: flex-end;
    margin:10px 0;
      button{
        width: 100px;
        height: 30px;
  color: white;
    font-size: 20px;
    font-size: 1em;
    border: none;
    background: #3743ed;
    border-radius: 5px;
    text-align: center;
      }
    
  }

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
    
  }
`;
export { Editor };
