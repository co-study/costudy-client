import styled from "@emotion/styled";

const BgImg = styled.div`
background-color: #3743ed;
#mainBg {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  height: 350px;
  padding: 0 20px;
  align-items: center;
  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
  }
  .home_title {
    flex: 1 1;
    @media screen and (max-width: 560px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align:center;
    }
    .home_title1 {
      flex: 1 1;
      color: white;
      font-size: 2.5em;
      margin: auto 0; 
      @media screen and (max-width: 560px) {
        height:100px;
        font-size: 28px;
        text-align: center;
      padding-top:50px;  
      }
    }
    .home_title2 {

      color: white;
      font-size: 5em;
      @media screen and (max-width: 560px) {
        font-size: 50px;
        text-align: center;
        margin-bottom:20px;
      }
    }
  }
  .home_icon {

    .home_avator{
      width:200px;
      @media screen and (max-width: 560px) {
        width:120px;
        margin-bottom:40px;
      }
    }

  }
 
  
  }
}
`;

export { BgImg };
