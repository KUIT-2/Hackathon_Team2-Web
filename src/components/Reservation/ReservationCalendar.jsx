import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ReservationCalendar.css";
import moment from "moment";
import BottomSheet from "../BottomSheet/BottomSheet";
import { useNavigate } from "react-router";
import * as S from "./ReservationCalendar.styles";

const ReservationCalender = () => {
  const [value, setValue] = useState(new Date());
  const [peopleNum, setpeopleNum] = useState(1);
  const [timeValue, setTimeValue] = useState();

  const navigate = useNavigate();

  const handlePeopleButton = (index) => {
    const peopleCount = index + 1;
    setpeopleNum(peopleCount);
  };

  const TodayButtonClick = () => {
    const today = new Date();
    setValue(today);
  };
  const handleCalendarChange = (value, event) => {
    setValue(value);
  };
  const handleTimeButton = (hour) => {
    setTimeValue(hour);
  };

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
                  onClick={() => handlePeopleButton(index)}
                  isActive={peopleNum === index + 1}
                >
                  {index + 1}명
                </S.PeopleButton>
              ))}
            </S.ReservationPeople>
          </S.ReservationPeopleContainer>
          <S.ReservationTime onClick={() => navigate("/store/2/reservation2")}>
            {[17, 18, 19, 20].map((hour) => (
              <S.TimeButton key={hour} onClick={() => handleTimeButton(hour)}>
                {hour}시
              </S.TimeButton>
            ))}
          </S.ReservationTime>
          <S.CloseButton onClick={() => navigate(-1)}>닫기</S.CloseButton>
        </S.Reservation>
      </S.ReservationContainer>
    </BottomSheet>
  );
};

export default ReservationCalender;
