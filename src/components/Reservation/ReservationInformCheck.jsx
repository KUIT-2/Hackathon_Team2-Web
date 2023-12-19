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

export default function ReservationInformCheck() {
  const navigate = useNavigate();
  return (
    <BottomSheet heightPer={70}>
      <CheckHeader>
        <CheckHeaderText>내일 방문이 맞으신가요?</CheckHeaderText>
      </CheckHeader>
      <CheckMain>
        <CheckHeading2>방문 일정을 다시 한번 확인해주세요.</CheckHeading2>
        <CheckMainSec>
          <CheckMainTitleSec>
            <CheckStoreHeading1>센시티브서울</CheckStoreHeading1>
            <CheckStoreHeading2>한남동 이탈리아음식</CheckStoreHeading2>
          </CheckMainTitleSec>
          <CheckInformSec>
            <CheckInformItem>
              <CheckInformItemIcon src={calendarImg} alt='' />
              <CheckInformItemText>1.06(금)</CheckInformItemText>
            </CheckInformItem>
            <CheckInformItem>
              <CheckInformItemIcon src={peopleImg} alt='' />
              <CheckInformItemText>오후 6:30</CheckInformItemText>
            </CheckInformItem>
            <CheckInformItem>
              <CheckInformItemIcon src={peopleImg} alt='' />
              <CheckInformItemText>2명</CheckInformItemText>
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
