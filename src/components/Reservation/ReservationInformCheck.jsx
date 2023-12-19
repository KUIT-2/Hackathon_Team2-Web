import React from 'react';
import BottomSheet from '../BottomSheet/BottomSheet';
import {
  CheckFooter,
  CheckFooterBtn,
  CheckHeader,
  CheckHeaderText,
  CheckHeading2,
  CheckInformItem,
  CheckInformItemIcon,
  CheckInformItemText,
  CheckInformSec,
  CheckMain,
  CheckMainSec,
  CheckMainTitleSec,
  CheckNotifySect,
  CheckNotifyText,
  CheckStoreHeading1,
  CheckStoreHeading2,
} from './ReservationInformCheck.styles';
import peopleImg from '../../assets/people-new.svg';
import calendarImg from '../../assets/calendar.svg';
import { useNavigate } from 'react-router';
import { useStore } from '../../store/useStore';
const dayArr = ['월', '화', '수', '목', '금', '토', '일'];
export default function ReservationInformCheck() {
  const navigate = useNavigate();
  const reservationData = useStore((state) => state.reservation);
  return (
    <BottomSheet heightPer={70}>
      <CheckHeader>
        <CheckHeaderText>내일 방문이 맞으신가요?</CheckHeaderText>
      </CheckHeader>
      <CheckMain>
        <CheckHeading2>방문 일정을 다시 한번 확인해주세요.</CheckHeading2>
        <CheckMainSec>
          <CheckMainTitleSec>
            <CheckStoreHeading1>
              {reservationData.store.name}
            </CheckStoreHeading1>
            <CheckStoreHeading2>
              {reservationData.store.location} {reservationData.store.category}
            </CheckStoreHeading2>
          </CheckMainTitleSec>
          <CheckInformSec>
            <CheckInformItem>
              <CheckInformItemIcon src={calendarImg} alt='' />
              <CheckInformItemText>
                {reservationData.date.getMonth() + 1}.
                {reservationData.date.getDate()}(
                {dayArr[reservationData.date.getDay()]})
              </CheckInformItemText>
            </CheckInformItem>
            <CheckInformItem>
              <CheckInformItemIcon src={peopleImg} alt='' />
              <CheckInformItemText>
                오후 {reservationData.time}:00
              </CheckInformItemText>
            </CheckInformItem>
            <CheckInformItem>
              <CheckInformItemIcon src={peopleImg} alt='' />
              <CheckInformItemText>
                {reservationData.peopleNum}명
              </CheckInformItemText>
            </CheckInformItem>
          </CheckInformSec>
        </CheckMainSec>
        <CheckNotifySect>
          <CheckNotifyText>
            당일 취소 및 노쇼는 레스토랑뿐만 아니라 다른 고객님께도 피해가 될 수
            있으므로 신중히 예약 부탁드립니다{':)'}
          </CheckNotifyText>
        </CheckNotifySect>
      </CheckMain>
      <CheckFooter>
        <CheckFooterBtn
          textcolor='black'
          bgcolor='white'
          onClick={() => navigate(-1)}
        >
          취소
        </CheckFooterBtn>
        <CheckFooterBtn
          onClick={() => navigate('/payment')}
          textcolor='white'
          bgcolor='#EB4F27'
        >
          확인
        </CheckFooterBtn>
      </CheckFooter>
    </BottomSheet>
  );
}
