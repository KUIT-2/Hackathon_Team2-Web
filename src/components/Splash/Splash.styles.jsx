import styled from 'styled-components';

export const wrapIntroduce = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const loginHello = styled.div`
  color: gray;
  text-align: left;
  font-size: 20px;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const companyName = styled.div`
  color: #ff7f50;
  text-align: left;
  font-size: 40px;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const inputID = styled.input`
  margin-top: 40px;
  padding: 3px;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 20px;
`;

export const inputPassword = styled.input`
  margin-top: 15px;
  padding: 3px;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 20px;
`;

export const loginBtn = styled.button`
  margin-top: 40px;
  border: 0px;
  border-radius: 24px;
  background: #ff7f50;
  width: 250px;
  height: 36px;
  flex-shrink: 0;
  color: white;
  font-size: 20px;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const registerBtn = styled.button`
  margin-top: 10px;
  border: 0px;
  border-radius: 24px;
  background: gray;
  width: 250px;
  height: 36px;
  flex-shrink: 0;
  color: white;
  font-size: 20px;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;
