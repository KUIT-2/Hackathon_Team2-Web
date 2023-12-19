import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 24px;
  z-index: 2;
`;
export const HeaderBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const IconBtn = styled.button`
  background: none;
  border: none;
`;
export const Icon = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(42deg)
    brightness(101%) contrast(99%);
`;
export const BookMarkIcon = styled(Icon)`
  width: 45px;
  height: 45px;
`;
export const StoreImgSect = styled.section`
  width: 100%;
  position: relative;
`;
export const StoreImg = styled.img`
  z-index: 0;
  width: 100%;
`;
export const StoreImgNum = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 60%;
  padding: 4px 12px;
  border-radius: 16px;
`;
export const StoreImgNumSect = styled.div`
  width: 100%;
  position: absolute;
  bottom: 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 2;
  align-items: center;
`;

export const Main = styled.main`
  margin-bottom: 200px;
`;

export const DescriptionSect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px 20px;
  border-bottom: solid 9px #efefef;
`;

export const MapBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 25px;
  padding: 14px;
  border-radius: 100%;
  background-color: white;
  border: none;
  box-shadow: 0 0 10px;
`;

export const MapIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Header1 = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;
export const Header2 = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;
export const Header3 = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

export const PickSect = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-bottom: solid 9px #efefef;
`;
export const PickHeader3 = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;
export const PickBtn = styled.button`
  background-color: #d9d9d9;
  color: black;
  padding: 7px 11px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 24px;
`;
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;
  background-color: white;
  border-top: 2px lightgray solid;
  z-index: 3;
  gap: 20px;
`;
export const BookMarkBtn = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  align-items: center;
`;
export const BookMarkBtnText = styled.p`
  margin: 0px;
`;
export const BookMarkBtnImg = styled.img`
  width: 42px;
  height: 42px;
`;
export const ReserveBtn = styled.button`
  flex: 1;
  background-color: #eb4f27;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 14px 0;
  border: none;
  border-radius: 8px;
`;

export const CategoryDescription = styled.section``;
export const CategoryBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CategoryBtn = styled.button`
  width: 100%;
  flex: 1;
  background: none;
  padding: 14px 0;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? '600' : '500')};
  border-bottom: 2px solid
    ${(props) => (props.selected ? 'black' : 'lightgray')};
  color: ${(props) => (props.selected ? 'black' : '#949494')};
`;
