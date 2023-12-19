import React from 'react';
import * as S from "./Login.Styles";

export default function Login() {
  return (
    <>
      <S.wrapIntroduce>
        <S.loginHello>즐거운 미식생활의 시작</S.loginHello>
        <S.companyName>CatchTable</S.companyName>
        <S.inputID placeholder="아이디를 입력하세요." />
        <S.inputPassword placeholder="비밀번호를 입력하세요." />
        <S.loginBtn >Login</S.loginBtn>
        <S.registerBtn>회원가입하기</S.registerBtn>
      </S.wrapIntroduce>
    </>
  );
}
