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
export const PaymentFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  padding: 22px;
`;
export const PaymentFooterBtn = styled.button`
  width: 100%;
  margin: 0 22px;
`;
