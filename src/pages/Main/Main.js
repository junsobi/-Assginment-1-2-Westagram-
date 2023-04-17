import React from "react";
import "./main.css";
import "../../styles/reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faComment as farComment,
  faShareSquare as farShare,
  faBookmark as farBookmark,
  faEllipsisH as fasEllipsis,
  faHeart as fasHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCompass as fasCompass,
  faHeart as fasHeart2,
  faUser as fasUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  return (
    <div>
      <header>
        <nav id="mainNav">
          <div id="logos">
            <a className="westarLogo" href="main.html"></a>
            <a className="westarLogo2" href="login.html">
              Instagram
            </a>
          </div>
          <div id="searchThings">
            <input className="searchBar" placeholder="검색" />
          </div>
          <div id="mainProfileThings">
            <a className="profileThings" id="mainCompass"></a>
            <a className="profileThings" id="mainNavHeart"></a>
            <a className="profileThings" id="mainMyPage"></a>
          </div>
        </nav>
      </header>
      <div className="main">
        <div className="feeds">
          <div className="article">
            <div className="articleProfiles">
              <div className="articleP">
                <a className="imgArticleProfile" href=""></a>
                <div className="txtArticleProfileThings">
                  <a className="txtArticleProfile" href="">
                    Wecode_bootcamp
                  </a>
                  <a className="txtArticleProfileS" href="">
                    WeCode-위코드
                  </a>
                </div>
              </div>
              <a className="articleViewMore" href="">
                <FontAwesomeIcon icon={faEllipsisH} />
              </a>
            </div>
            <img
              className="articleImg"
              src="images/first_article.jpeg"
              alt="first_article"
            />

            <div className="socialThings">
              <div className="reacting">
                <div className="reactingS">
                  <button className="heart">
                    <FontAwesomeIcon icon={farHeart} />
                  </button>
                  <button className="mention">
                    <FontAwesomeIcon icon={farComment} />
                  </button>
                  <button className="share">
                    <FontAwesomeIcon icon={farShare} />
                  </button>
                </div>
                <button className="bookmark">
                  <FontAwesomeIcon icon={farBookmark} />
                </button>
              </div>
            </div>
            <div className="reactingPeople">
              <img className="reactingImg" src="images/peoples1.webp" />
              <div className="whoLike">Alice_Book님 외 4명이 좋아합니다</div>
            </div>
            <div className="details">
              <span className="who">Wecode_bootcamp</span> "위코드는 단순
              교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서 배우고 저는 총
              5개회사에서 오퍼를 받았습니다" <br />
              <span className="viewMore">더보기</span>
              <div className="newCommentThings">
                <div className="newComment"></div>
                <div className="newCommentTime"></div>
              </div>
            </div>
            <form>
              <input className="comment" placeholder="댓글달기" />
              <button className="commentSubmit">게시</button>
            </form>
          </div>
        </div>
        <div className="main-right">
          <div className="whosPage">
            <img className="myImg" src="images/peoples1.webp" />
            <div className="myDetail">Alice_Book</div>
          </div>
          <div className="story">
            <div className="storyTitles">
              <div className="storyTitle1">스토리</div>
              <div className="storyTitle2">모두보기</div>
            </div>
            <div className="storyMembers">
              <div className="first LineStory">
                <img
                  className="storyPeo"
                  alt="첫번째 스토리"
                  src="images/peoples2.webp"
                />
                <div className="first LineDetails">
                  <div className="first S LineName"> Abcde </div>
                  <div className="first S LineBeforeT">5분전</div>
                </div>
              </div>
              <div className="second S LineStory">
                <img
                  className="storyPeo"
                  alt="두번째"
                  src="images/peoples3.webp"
                />
                <div className="second LineDetails">
                  <div className="second S LineName"> bcdefg </div>
                  <div className="second S LineBeforeT">9분전</div>
                </div>
              </div>
              <div className="third S LineStory">
                <img
                  className="storyPeo"
                  alt="세번째"
                  src="images/peoples4.webp"
                />
                <div className="third LineDetails">
                  <div className="third S LineName"> cdefg </div>
                  <div className="third S LineBeforeT">1시간전</div>
                </div>
              </div>
              <div className="fourth S LineStory">
                <img
                  className="storyPeo"
                  alt="네번째"
                  src="images/peoples5.webp"
                />
                <div className="fourth S LineDetails">
                  <div className="fourth S LineName"> defgh </div>
                  <div className="fourth S LineBeforeT">3시간전</div>
                </div>
              </div>
            </div>
          </div>
          <div className="recomend">
            <div className="recomendTitles">
              <div className="recomendTitle1">회원님을 위한 추천</div>
              <div className="recomendTitle2">모두보기</div>
            </div>

            <div className="recomendWho">
              <div className="first LineRecomend">
                <div className="recomendPC">
                  <img
                    className="storyPeo"
                    alt="첫번째리코맨드"
                    src="images/peoples6.webp"
                  />
                  <div className="first LineDetails">
                    <div className="first R LineName"> Hijk </div>
                    <div className="first R LineHow">abcd님 외 2명이 ...</div>
                  </div>
                </div>
                <div className="follow 1">팔로우</div>
              </div>
              <div className="second LineRecomend">
                <div className="recomendPC">
                  <img
                    className="storyPeo"
                    alt="두번째"
                    src="images/peoples7.webp"
                  />
                  <div className="second LineDetails">
                    <div className="second R LineName"> ijklm </div>
                    <div className="second R LineHow">abcd님 외 2명이 ...</div>
                  </div>
                </div>
                <div className="follow 2">팔로우</div>
              </div>
              <div className="second R LineRecomend">
                <div className="recomendPC">
                  <img
                    className="storyPeo"
                    alt="두번째"
                    src="images/peoples8.webp"
                  />
                  <div className="second LineDetails">
                    <div className="second R LineName"> jklmnop </div>
                    <div className="second R LineHow">abcd님 외 2명이 ...</div>
                  </div>
                </div>
                <div className="follow 3">팔로우</div>
              </div>
            </div>
          </div>
          <div className="companyD">
            Instagram 정보 • 지원 • 홍보 센터 • API
            <br />
            채용 정보 • 개인정보처리방침 • 약관 •
            <br />
            디렉터리 • 프로필 • 해시태그 • 언어
            <br />© 2019 INSTAGRAM
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
