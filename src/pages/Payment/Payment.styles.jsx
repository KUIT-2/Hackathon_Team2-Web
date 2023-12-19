import styled from 'styled-components';


export const PaymentHeader = styled.header`
  padding: 20px 24px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const PaymentBackBtn = styled.button`
  background: none;
  border: none;
`;
export const PaymentBackBtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const PaymentHeaderText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export const PaymentTitle = styled.h1`
margin-bottom: 32px;
color: #222;
text-align: left;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
margin-left: 27px;
`;



export const WrapPersonLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const WrapPersonLine2 = styled.div`
  
  position: absolute;
  top: 33%;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const PersonKorean = styled.span`
  position: absolute;
  left: 27px;
  color: #222;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  `;

export const PersonPrice = styled.span`
  position: absolute;
  right: 27px;
  color: #000;
  margin-left: 170px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const PersonKorean2 = styled.span`
  position: absolute;
  left: 27px;
  color: #222;
  text-align: center;
  font-size: 14px;
  font-style: bold;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: -0.3px;
  `;

export const PersonPrice2 = styled.span`
  position: absolute;
  right: 27px;
  color: #000;
  margin-left: 170px;
  text-align: center;
  font-size: 14px;
  font-style: bold;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: -0.3px;
`;


export const ReservationMiddleLine = styled.div`
position: absolute;
left: 27px;
top: 30%;
width: 85%;
height: 1px;
background: #CACACA;
`

export const ReservationMiddleLine2 = styled.div`
position: absolute;
top: 40%;
width: 100%;
height: 10px;
background: #CACACA;
`;

export const ReservationMiddleLine3 = styled.div`
position: absolute;
top: 67%;
width: 100%;
height: 10px;
background: #CACACA;
`;
export const PaymentTitle2 = styled.div`
position: absolute;
top: 45%;
margin-left: 27px;
color: #222;
text-align: left;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
`;

export const QuestionSymbol = styled.div`
background-image: url(${(props) => props.imageurl});
position: absolute;
top: 45%;
left: 25%;
width: 24px;
height: 24px;
flex-shrink: 0;
`;

export const ChoiceWarning = styled.div`
position: absolute;
top: 50%;
right: 27px;
color: #E33A3A;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
`;

export const WrapCircle = styled.div`

position: absolute;
top : 58%;
left: 30px;
`;

export const OuterCircle = styled.div`
position: relative;
width: 24px;
height: 24px;
flex-shrink: 0;
background: #D9D9D9;
border-radius: 100%;
`;

export const InnerCircle = styled.div`
position: absolute;
top: 20%;
left: 20%;
background: black;
width: 14px;
height: 14px;
flex-shrink: 0;
border-radius: 100%;
`;

export const WhichPay = styled.div`
position: absolute;
top: 58%;
left: 70px;
color: #222;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
`;

export const RegisterCount = styled.div`
position: absolute;
top: 58%;
left: 140px;
color: #BABABA;
text-align: center;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
`;

export const DownArrow = styled.div`
background-image: url(${(props) => props.imageurl});
position: absolute;
top: 58%;
right: 27px;
width: 24px;
height: 24px;
flex-shrink: 0;
`;

export const PaymentTitle3 = styled.div`
margin-left: 27px;
position: absolute;
top: 70%;
color: #000;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
`;

export const ChoiceWarning2 = styled.div`
position: absolute;
top: 71%;
right: 27px;
color: #E33A3A;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
`;

export const CheckBox = styled.div`
background-image: url(${(props) => props.imageurl});
position: absolute;
top: 77%;
margin-left: 27px;
width: 20px;
height: 20px;
`;

export const AgreeSentence = styled.div`
position: absolute;
top: 77%;
left: 15%;
color: #000;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.3px;
`;

export const PaymentFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 22px;
`;
export const PaymentFooterBtn = styled.button`
  width: 308px;
  padding: 17px 0;
  border: 0px;
  background-color: #eb4f27;
  color: white;
  border-radius: 12px;
`;

