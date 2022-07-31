import React from "react";
import {
  StudyContent,
  ContentHeader,
  ContentDetail,
  ContentComment,
} from "../../Style/DetailCSS";

import usericon from "../Icons/user.png";
import Tag from "../Icons/tag.png";
import arrow from "../Icons/arrow.png";

import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  return (
    <StudyContent>
      <ContentHeader>
        <div>
          <button onClick={() => navigate(-1)} className="sider__arrow">
            <img src={arrow}></img>
          </button>
          <span className="title">
            데이터베이스 인터널스 북 스터디 하실분 세분 모집합니다!
          </span>
        </div>

        <div className="content_user">
          <div className="user_img">
            <img src={usericon}></img>
          </div>
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
              <img src={Tag}></img>
              <span className="status__title">스터디</span>
              <button>지원하기</button>
            </li>
            <li className="status">
              <img src={Tag}></img>
              <span className="status__title">주제</span>
              <span className="status__content">코딩테스트</span>
            </li>
            <li className="status">
              <img src={Tag}></img>
              <span className="status__title">장소</span>
              <span className="status__content">서울</span>
            </li>
            <li className="status">
              <img src={Tag}></img>
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
          <h3>댓글</h3>
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
