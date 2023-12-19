import React from 'react';
import { useNavigate } from 'react-router';
import { useStore } from '../../store/useStore';
import BottomSheet from '../BottomSheet/BottomSheet';
import * as S from '../Reservation/ReservationComplete.styles';
const dayArr = ['월', '화', '수', '목', '금', '토', '일'];

const ReservationComplete = () => {
  const navigate = useNavigate();
  const reservationData = useStore((state) => state.reservation);
  return (
    <BottomSheet heightPer={40}>
      <S.CompleteContainer>
        <S.CompleteMassage>예약이 완료되었습니다.</S.CompleteMassage>
        <S.CompleteInformation>
          <S.RestaurantInformation>
            <S.RestaurantText>레스토랑</S.RestaurantText>
            <S.RestaurantName>{reservationData.store.name}</S.RestaurantName>
          </S.RestaurantInformation>
          <S.DateInformation>
            <S.DateText>예약일시</S.DateText>
            <S.CompleteDate>
              {reservationData.date.getMonth() + 1}.
              {reservationData.date.getDate()}(
              {dayArr[reservationData.date.getDay()]})
            </S.CompleteDate>
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
