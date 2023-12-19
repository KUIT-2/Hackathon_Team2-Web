import React from 'react';
import { Outlet, useNavigate } from 'react-router';
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
  const navigate = useNavigate();
  return (
    <>
      <PaymentHeader>
        <PaymentBackBtn onClick={() => navigate(-1)}>
          <PaymentBackBtnIcon src={backImg} alt='' />
        </PaymentBackBtn>
        <PaymentHeaderText>센시티브서울</PaymentHeaderText>
      </PaymentHeader>
      <PaymentFooter>
        <PaymentFooterBtn onClick={() => navigate('check')}>
          10,000원 결제하기
        </PaymentFooterBtn>
      </PaymentFooter>
      <Outlet />
    </>
  );
}
