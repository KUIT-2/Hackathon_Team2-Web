import styled from 'styled-components';

export const TodayButton = styled.button`
  position: absolute;
  left: 35px;
  top: 35px;
  border: none;
  background-color: #fff;
  text-decoration: underline;
  color: #eb4f27;
  font-size: 14px;
  font-weight: 500;
`;

export const ReservationPeopleContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 24px;
  overflow: scroll;
`;
export const ReservationContainer = styled.div`
  width: 100%;
  border-radius: 24px;
  overflow-x: hidden;
`;
export const Reservation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ReservationPeople = styled.div`
  display: flex;
  margin-left: 15px;
  position: relative;
`;

export const Line = styled.div`
  width: 90%;
  border-top: 1px solid #a0a096;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ReservationTimeWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow-x: auto;
`;
export const ReservationTime = styled.div`
  margin: 10px;
  display: flex;
  position: relative;
  left: 0;
  top: 0;
  padding: 15px;
  gap: 10px;
`;

export const TimeButton = styled.button`
  width: 82px;
  height: 39px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #eb4f27;
  margin-bottom: 15px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const CloseButton = styled.button`
  width: 329px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 36px;
  cursor: pointer;
`;

export const PeopleButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#eb4f27' : '#fff')};
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
