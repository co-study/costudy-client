import React from "react";
import {
  StudyContent,
  ContentHeader,
  ContentDetail,
  ContentComment,
} from "../../Style/DetailCSS";

function Detail() {
  return (
    <StudyContent>
      <ContentHeader>
        <div>
          <div className="sider__arrow">
            <img src="./arrow.png"></img>
          </div>
          <span className="title">
            데이터베이스 인터널스 북 스터디 하실분 세분 모집합니다!
          </span>
        </div>

        <div className="content_user">
          <img className="userImg" src="./user.png"></img>
          <div>
            <span className="userName">noah</span>
          </div>
          <div>
            <span className="RegistrationDate">2022.6.27</span>
          </div>
        </div>
      </ContentHeader>
      <ContentDetail>
        <div className="postInfo">
          <div className="poststatus">
            <h3>모집현황</h3>
          </div>
          <ul className="status__info">
            <li className="status">
              <img src="./attend.png"></img>
              <span className="status__title">스터디</span>
              <button>지원하기</button>
            </li>
            <li className="status">
              <img src="./book.png"></img>
              <span className="status__title">주제</span>
              <span className="status__content">코딩테스트</span>
            </li>
            <li className="status">
              <img src="./location.png"></img>
              <span className="status__title">장소</span>
              <span className="status__content">서울</span>
            </li>
            <li className="status">
              <img src="./meet.png"></img>
              <span className="status__title">모집인원</span>
              <span className="status__content">8명</span>
            </li>
          </ul>
        </div>
        <div className="Introduction">
          <h3 className="studyIntro">스터디소개</h3>
          <p>
            안녕하세요 평범한 학생입니다. 데이터베이스 인터널스 북 스터디 하실분
            세분 모집합니다 !!! 현재 저 혼자 공부하고 있고 3명 모이면 스터디
            시작 할 예정입니다. 관심있으시면 지원 부탁드립니다 ㅎㅎ안녕하세요
            <br />
            <br />
            평범한 학생입니다. 데이터베이스 인터널스 북 스터디 하실분 세분
            모집합니다 !!! 현재 저 혼자 공부하고 있고 3명 모이면 스터디 시작 할
            예정입니다. 관심있으시면 지원 부탁드립니다 ㅎㅎ안녕하세요 평범한
            학생입니다. 데이터베이스 인터널스 북 스터디 하실분 세분 모집합니다
            !!! 현재 저 혼자 공부하고 있고 3명 모이면 스터디 시작 할 예정입니다.
            관심있으시면 지원 부탁드립니다 ㅎㅎ
            <br />
            <br />
            안녕하세요 평범한 학생입니다. 데이터베이스 인터널스 북 스터디 하실분
            세분 모집합니다 !!! 현재 저 혼자 공부하고 있고 3명 모이면 스터디
            시작 할 예정입니다. 관심있으시면 지원 부탁드립니다 ㅎㅎ안녕하세요
            평범한 학생입니다. 데이터베이스 인터널스 북 스터디 하실분 세분
            모집합니다 !!! 현재 저 혼자 공부하고 있고 3명 모이면 스터디 시작 할
            예정입니다. 관심있으시면 지원 부탁드립니다 ㅎㅎ안녕하세요 평범한
            학생입니다. 데이터베이스 인터널스 북 스터디 하실분 세분 모집합니다
            !!! 현재 저 혼자 공부하고 있고 3명 모이면 스터디 시작 할 예정입니다.
            관심있으시면 지원 부탁드립니다 ㅎㅎ
          </p>
        </div>
      </ContentDetail>
      <ContentComment>
        <label htmlFor="content">
          <h3>eit</h3>
        </label>
        <textarea placeholder="댓글을 입력하세요."></textarea>
        <div className="commentButton">
          <button>댓글등록</button>
        </div>
      </ContentComment>
    </StudyContent>
  );
}
export default Detail;
