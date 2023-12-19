import styled from 'styled-components';

export const CheckHeader = styled.header`
  padding: 20px 21px;
  padding-bottom: 12px;
  border-bottom: 2px solid lightgray;
`;
export const CheckHeaderText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const CheckMain = styled.main`
  padding-top: 16px;
`;
export const CheckHeading2 = styled.h2`
  font-size: 14px;
  font-style: normal;
  color: #848484;
  padding-bottom: 16px;
  padding-left: 21px;
  font-weight: 500;
  margin: 0;
`;
export const CheckStoreHeading1 = styled.h1`
  font-size: 20px;
  font-style: normal;
  color: black;
  font-weight: 600;
  margin: 0;
`;
export const CheckStoreHeading2 = styled.h2`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: #8c8c8c;
  margin: 0;
`;
export const CheckMainSec = styled.section`
  padding-top: 24px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CheckMainTitleSec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
export const CheckInformSec = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const CheckInformItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckNotifyText = styled.h2`
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;
export const CheckNotifySect = styled.section`
  padding: 12px 26px;
`;
export const CheckFooterBtn = styled.button`
  border: 1px solid #c1c1c1;
  background-color: ${(props) => props.bgcolor};
  font-size: 14px;
  font-weight: 600;
  padding: 13px 57px;
  color: black;
`;
export const CheckFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
