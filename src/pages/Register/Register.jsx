import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from './Register.Styles';

export default function Register() {
  const [newMember, setNewMember] = useState({
    id: '',
    password: '',
    name: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setNewMember({
        ...newMember,
        [name]: value,
      });
      return;
    }
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // 코드 추가 필요.
    fetch('http://192.168.104.65:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newMember),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result && data.result.userId) {
          navigate('/login');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <S.wrapIntroduce>
        <S.loginHello>즐거운 미식생활의 시작</S.loginHello>
        <S.companyName>CatchTable</S.companyName>
        <S.inputName
          name='name'
          value={newMember.name}
          onChange={handleChange}
          placeholder='이름을 입력하세요.'
        />
        <S.inputPhoneNumber
          name='phoneNumber'
          value={newMember.phoneNumber}
          onChange={handleChange}
          placeholder='폰 번호를 입력하세요.'
        />
        <S.inputID
          name='id'
          value={newMember.id}
          onChange={handleChange}
          placeholder='사용할 아이디를 입력하세요.'
        />
        <S.inputPassword
          name='password'
          type='password'
          value={newMember.password}
          onChange={handleChange}
          placeholder='사용할 비밀번호를 입력하세요.'
        />
        <S.registerBtn onClick={handleRegister}>
          회원가입 완료하기
        </S.registerBtn>
      </S.wrapIntroduce>
    </>
  );
}
