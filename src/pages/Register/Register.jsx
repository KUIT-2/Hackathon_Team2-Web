import React from 'react';
import * as S from "./Register.Styles";

export default function Register() {
  return (
    <>
      <S.wrapIntroduce>
        <S.loginHello>즐거운 미식생활의 시작</S.loginHello>
        <S.companyName>CatchTable</S.companyName>
        <S.inputName placeholder="이름을 입력하세요." />
        <S.inputPhoneNumber placeholder="폰 번호를 입력하세요." />
        <S.inputID placeholder="사용할 아이디를 입력하세요." />
        <S.inputPassword placeholder="사용할 비밀번호를 입력하세요." />
        <S.registerBtn>회원가입 완료하기</S.registerBtn>
      </S.wrapIntroduce>
    </>
  )
}
