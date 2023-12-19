import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ReservationCalendar.css";
import moment from "moment";
import BottomSheet from "../BottomSheet/BottomSheet";
import { useNavigate } from "react-router";
import * as S from "./ReservationCalendar.styles";

const ReservationCalender = () => {
  const [value, onChange] = useState(new Date());
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(1);
  const navigate = useNavigate();
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };
  const TodayButtonClick = () => {
    const today = new Date();
    onChange(today);
  };
  return (
    <BottomSheet heightPer={85}>
      <S.ReservationContainer>
        <S.Reservation>
          <S.TodayButton onClick={() => TodayButtonClick()}>오늘</S.TodayButton>
          <Calendar
            onChange={onChange}
            value={value}
            next2Label={null}
            prev2Label={null}
            formatDay={(loacle, date) => moment(date).format("D")}
          />
          <S.Line />
          <S.ReservationPeopleContainer>
            <S.ReservationPeople>
              {[...Array(10)].map((_, index) => (
                <S.PeopleButton
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  isActive={selectedButtonIndex === index}
                >
                  {index + 1}명
                </S.PeopleButton>
              ))}
            </S.ReservationPeople>
          </S.ReservationPeopleContainer>
          <S.ReservationTime onClick={() => navigate("/store/2/reservation2")}>
            <S.TimeButton>오후 x:xx</S.TimeButton>
          </S.ReservationTime>
          <S.CloseButton onClick={() => navigate(-1)}>닫기</S.CloseButton>
        </S.Reservation>
      </S.ReservationContainer>
    </BottomSheet>
  );
};

export default ReservationCalender;
