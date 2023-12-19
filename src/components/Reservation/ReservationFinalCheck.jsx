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
  CheckNotifyCheckBoxDiv,
  CheckNotifyCheckBoxLabel,
  CheckNotifySect,
  CheckNotifyText,
  CheckStoreHeading1,
  CheckStoreHeading2,
} from './ReservationFinalCheck.styles';
import peopleImg from '../../assets/people-new.svg';
import calendarImg from '../../assets/calendar.svg';
import { useNavigate } from 'react-router';

export default function ReservationFinalCheck() {
  const navigate = useNavigate();
  return (
    <BottomSheet heightPer={70}>
      <CheckHeader>
        <CheckHeaderText>예약을 최종 확정하시겠어요?</CheckHeaderText>
      </CheckHeader>
      <CheckMain>
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
            예약 확정 버튼을 누르면 예약이 최종 확정되며, 레스토랑에 고객님의
            예약이 자동으로 등록됩니다.
          </CheckNotifyText>
          <CheckNotifyText>계속 진행하시겠어요?</CheckNotifyText>
          <CheckNotifyCheckBoxDiv>
            <input type='checkbox' id='checkbox' />
            <CheckNotifyCheckBoxLabel for='checkbox'>
              다시 보지 않기
            </CheckNotifyCheckBoxLabel>
          </CheckNotifyCheckBoxDiv>
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
          onClick={() => navigate('/payment/complete')}
          textcolor='white'
          bgcolor='#EB4F27'
        >
          확인
        </CheckFooterBtn>
      </CheckFooter>
    </BottomSheet>
  );
}
