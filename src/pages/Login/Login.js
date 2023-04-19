import React from "react";
import "./loginstyle.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div id="mainPage">
      <div id="titleLogin">Instagram</div>
      <div id="inputsLogin">
        <input
          id="contactLogin"
          className="loginGrey"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          id="passwordLogin"
          className="loginGrey"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <div id="submitLogin">
        <button id="loginButton" onClick={goToMain}>
          로그인
        </button>
        {/* //로그인 버튼을 눌렀을때 메인페이지로 감 */}
      </div>
      <a href="" id="forgotLogin">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default LoginPage;
