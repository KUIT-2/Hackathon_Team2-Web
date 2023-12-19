import React, { useState } from 'react';
import * as S from "./Register.Styles";

export default function Register() {
  const [newMember, setNewMember] = useState({
    username: "",
    phoneNumber: "",
    ID: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // 코드 추가 필요.
    console.log("New Member Information:", newMember);
  };

  return (
    <>
      <S.wrapIntroduce>
        <S.loginHello>즐거운 미식생활의 시작</S.loginHello>
        <S.companyName>CatchTable</S.companyName>
        <S.inputName
          name="username"
          value={newMember.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요."
        />
        <S.inputPhoneNumber
          name="phoneNumber"
          value={newMember.phoneNumber}
          onChange={handleChange}
          placeholder="폰 번호를 입력하세요."
        />
        <S.inputID
          name="ID"
          value={newMember.ID}
          onChange={handleChange}
          placeholder="사용할 아이디를 입력하세요."
        />
        <S.inputPassword
          name="password"
          value={newMember.password}
          onChange={handleChange}
          placeholder="사용할 비밀번호를 입력하세요."
        />
        <S.registerBtn onClick={handleRegister}>회원가입 완료하기</S.registerBtn>
      </S.wrapIntroduce>
    </>
  );
}
