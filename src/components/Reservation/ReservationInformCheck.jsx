import React from 'react';
import BottomSheet from '../BottomSheet/BottomSheet';
import {
  CheckFooter,
  CheckFooterBtn,
  CheckHeader,
  CheckHeaderText,
  CheckHeading2,
  CheckInformItem,
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

export default function ReservationInformCheck() {
  return (
    <BottomSheet heightPer={60}>
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
              <img src={peopleImg} alt='' />
              <h3>1.06(금)</h3>
            </CheckInformItem>
            <CheckInformItem>
              <img src={peopleImg} alt='' />
              <h3>오후 6:30</h3>
            </CheckInformItem>
            <CheckInformItem>
              <img src={peopleImg} alt='' />
              <h3>2명</h3>
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
        <CheckFooterBtn bgcolor='white'>취소</CheckFooterBtn>
        <CheckFooterBtn bgcolor='#D9D9D9'>확인</CheckFooterBtn>
      </CheckFooter>
    </BottomSheet>
  );
}
