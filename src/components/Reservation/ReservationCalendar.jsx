import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./ReservationCalendar.css";
import moment from "moment";
import BottomSheet from "../BottomSheet/BottomSheet";
import { useNavigate } from "react-router";
import * as S from "./ReservationCalendar.styles";
import { useStore } from "../../store/useStore";

const ReservationCalender = () => {
  const [peopleNum, setpeopleNum] = useState(1);
  const [value, setValue] = useState(new Date());
  const reservationData = useStore((state) => state.reservation);
  const setReservationTime = useStore((state) => state.setReservationTime);
  const setReservationDate = useStore((state) => state.setReservationDate);
  const setReservationPeopleNum = useStore(
    (state) => state.setReservationPeopleNum
  );

  const navigate = useNavigate();
  const handlePeopleButton = (index) => {
    const peopleCount = index + 1;
    setpeopleNum(peopleCount);
  };
  useEffect(() => {
    if (!reservationData) {
      setReservationDate(new Date());
    }
  }, []);
  const TodayButtonClick = () => {
    const today = new Date();
    setReservationDate(today);
  };
  const handleCalendarChange = (value, event) => {
    setValue(value);
  };
  const handleTimeButton = (hour) => {
    setReservationTime(hour);
  };

  // useEffect(() => {
  //   console.log(value);
  //   setReservationDate(value);
  // }, [value]);

  return (
    <BottomSheet heightPer={85}>
      <S.ReservationContainer>
        <S.Reservation>
          <S.TodayButton onClick={() => TodayButtonClick()}>오늘</S.TodayButton>
          <Calendar
            onChange={handleCalendarChange}
            value={value}
            next2Label={null}
            prev2Label={null}
            formatDay={(loacle, date) => moment(date).format("D")}
          />
          <S.Line />
          <S.ReservationPeopleContainer>
            <S.ReservationPeople>
              {[...Array(20)].map((_, index) => (
                <S.PeopleButton
                  key={index}
                  onClick={() => {
                    handlePeopleButton(index);
                    setReservationPeopleNum(index + 1);
                  }}
                  isActive={peopleNum === index + 1}
                >
                  {index + 1}명
                </S.PeopleButton>
              ))}
            </S.ReservationPeople>
          </S.ReservationPeopleContainer>
          <S.ReservationTimeWrapper>
            <S.ReservationTime>
              {[17, 18, 19, 20, 21, 22, 23].map((hour) => (
                <S.TimeButton
                  key={hour}
                  onClick={() => {
                    handleTimeButton(hour);
                    setReservationDate(value);
                    navigate(`/store/${reservationData.store.id}/reservation2`);
                  }}
                >
                  {hour}시
                </S.TimeButton>
              ))}
            </S.ReservationTime>
          </S.ReservationTimeWrapper>

          <S.CloseButton onClick={() => navigate(-1)}>닫기</S.CloseButton>
        </S.Reservation>
      </S.ReservationContainer>
    </BottomSheet>
  );
};

export default ReservationCalender;
