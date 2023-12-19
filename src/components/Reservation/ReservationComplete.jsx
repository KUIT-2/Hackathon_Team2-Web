import React from 'react';
import { useNavigate } from 'react-router';
import BottomSheet from '../BottomSheet/BottomSheet';
import * as S from '../Reservation/ReservationComplete.styles';

const ReservationComplete = () => {
  const navigate = useNavigate();
  return (
    <BottomSheet heightPer={40}>
      <S.CompleteContainer>
        <S.CompleteMassage>예약이 완료되었습니다.</S.CompleteMassage>
        <S.CompleteInformation>
          <S.RestaurantInformation>
            <S.RestaurantText>레스토랑</S.RestaurantText>
            <S.RestaurantName>음식점이름</S.RestaurantName>
          </S.RestaurantInformation>
          <S.DateInformation>
            <S.DateText>예약일시</S.DateText>
            <S.CompleteDate>xx.xx요일</S.CompleteDate>
          </S.DateInformation>
        </S.CompleteInformation>

        <S.CompleteButton>
          <S.GomainButton onClick={() => navigate('/')}>
            메인으로 가기
          </S.GomainButton>
          <S.CompleteConfirmButton>예약내역 확인</S.CompleteConfirmButton>
        </S.CompleteButton>
      </S.CompleteContainer>
    </BottomSheet>
  );
};

export default ReservationComplete;
