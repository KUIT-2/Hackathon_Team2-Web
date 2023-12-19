import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useStore } from '../../store/useStore';
import * as S from './Login.Styles';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const setUserId = useStore((state) => state.setUserId);
  const userId = useStore((state) => state.userId);
  useEffect(() => {
    if (userId) {
      navigate('/');
    }
  }, [userId]);
  return (
    <>
      <S.wrapIntroduce>
        <S.loginHello>즐거운 미식생활의 시작</S.loginHello>
        <S.companyName>CatchTable</S.companyName>
        <S.inputID
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder='아이디를 입력하세요.'
        />
        <S.inputPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='비밀번호를 입력하세요.'
        />
        <S.loginBtn
          onClick={() => {
            fetch('http://192.168.104.65:8080/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({ id, password }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.result && data.result.userId) {
                  setUserId(data.result.userId);
                }
              })
              .catch((error) => console.error(error));
          }}
        >
          Login
        </S.loginBtn>
        <S.registerBtn onClick={() => navigate('/register')}>
          회원가입하기
        </S.registerBtn>
      </S.wrapIntroduce>
    </>
  );
}
