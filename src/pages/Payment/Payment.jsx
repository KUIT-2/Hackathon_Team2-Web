import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import backImg from '../../assets/back.svg';
import { useStore } from '../../store/useStore';
import {
  PaymentBackBtn,
  PaymentBackBtnIcon,
  PaymentFooter,
  PaymentFooterBtn,
  PaymentHeader,
  PaymentHeaderText,
  PaymentTitle,
  WrapPersonLine,
  PersonKorean,
  PersonPrice,
} from './Payment.styles';
export default function Payment() {
  const navigate = useNavigate();
  const reservationData = useStore((state) => state.reservation);
  return (
    <>
      <PaymentHeader>
        <PaymentBackBtn onClick={() => navigate(-1)}>
          <PaymentBackBtnIcon src={backImg} alt='' />
        </PaymentBackBtn>
        <PaymentHeaderText>{reservationData.store.name}</PaymentHeaderText>
      </PaymentHeader>

      <PaymentTitle>예약금 결제</PaymentTitle>

      <WrapPersonLine>
        <PersonKorean>1인 예약금 x X</PersonKorean>
        <PersonPrice>XX,XXX원</PersonPrice>
      </WrapPersonLine>

      <PaymentFooter>
        <PaymentFooterBtn onClick={() => navigate('check')}>
          10,000원 결제하기
        </PaymentFooterBtn>
      </PaymentFooter>
      <Outlet />
    </>
  );
}
