import styled from 'styled-components';

export const PaymentHeader = styled.header`
  padding: 20px 24px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const PaymentBackBtn = styled.button`
  background: none;
  border: none;
`;
export const PaymentBackBtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const PaymentHeaderText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export const PaymentTitle = styled.h1`
margin-bottom: 32px;
color: #222;
text-align: left;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
margin-left: 27px;
`;



export const WrapPersonLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const PersonKorean = styled.span`
  position: absolute;
  left: 27px;
  color: #222;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  `;

export const PersonPrice = styled.span`
  position: absolute;
  right: 27px;
  color: #000;
  margin-left: 170px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const PaymentFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 22px;
`;
export const PaymentFooterBtn = styled.button`
  width: 308px;
  padding: 17px 0;
  border: 0px;
  background-color: #eb4f27;
  color: white;
  border-radius: 12px;
`;
