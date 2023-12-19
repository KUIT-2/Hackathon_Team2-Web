import React from 'react';
import backImg from '../../assets/back.svg';
import {
  PaymentBackBtn,
  PaymentBackBtnIcon,
  PaymentFooter,
  PaymentFooterBtn,
  PaymentHeader,
  PaymentHeaderText,
} from './Payment.styles';
export default function Payment() {
  return (
    <>
      <PaymentHeader>
        <PaymentBackBtn>
          <PaymentBackBtnIcon src={backImg} alt='' />
        </PaymentBackBtn>
        <PaymentHeaderText>음식점 이름</PaymentHeaderText>
      </PaymentHeader>
      <PaymentFooter>
        <PaymentFooterBtn>10,000원 결제하기</PaymentFooterBtn>
      </PaymentFooter>
    </>
  );
}
