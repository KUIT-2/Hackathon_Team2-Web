import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import backImg from '../../assets/back.svg';

import qoImg from "../../assets/q-o.svg";
import downArrowImage from "../../assets/arrow-toggle-down.svg";
import checkBoxImage from "../../assets/checkbox.svg";

import {
  PaymentBackBtn,
  PaymentBackBtnIcon,
  PaymentFooter,
  PaymentFooterBtn,
  PaymentHeader,
  PaymentHeaderText,
  PaymentTitle,
  WrapPersonLine,
  WrapPersonLine2,
  PersonKorean,
  PersonPrice,
  ReservationMiddleLine,
  PersonKorean2,
  PersonPrice2,
  ReservationMiddleLine2,
  PaymentTitle2,
  QuestionSymbol,
  ChoiceWarning,
  WrapCircle,
  OuterCircle,
  InnerCircle,
  WhichPay,
  RegisterCount,
  DownArrow,
  ReservationMiddleLine3,
  PaymentTitle3,
  ChoiceWarning2,
  CheckBox,
  AgreeSentence,
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

      <ReservationMiddleLine />

      <WrapPersonLine2>
        <PersonKorean>총 예약금</PersonKorean>
        <PersonPrice>XX,XXX원</PersonPrice>
      </WrapPersonLine2>

      <ReservationMiddleLine2 />

      <PaymentTitle2>결제수단</PaymentTitle2>
      <QuestionSymbol imageurl={qoImg} />

      <ChoiceWarning>필수 선택</ChoiceWarning>

      <WrapCircle>
        <OuterCircle>
          <InnerCircle />
        </OuterCircle>
      </WrapCircle>

      <WhichPay>캐치페이</WhichPay>
      <RegisterCount>x개 등록됨</RegisterCount>
      <DownArrow imageurl={downArrowImage} />

      <ReservationMiddleLine3 />

      <PaymentTitle3>주문 내용 확인 및 결제 동의</PaymentTitle3>
      <ChoiceWarning2 >필수 선택</ChoiceWarning2>
      <CheckBox imageurl={checkBoxImage} />
      <AgreeSentence>[필수] 취소 및 환불 규정에 동의합니다</AgreeSentence>

      <PaymentFooter>
        <PaymentFooterBtn onClick={() => navigate('check')}>
          10,000원 결제하기
        </PaymentFooterBtn>
      </PaymentFooter>
      <Outlet />
    </>
  );
}
