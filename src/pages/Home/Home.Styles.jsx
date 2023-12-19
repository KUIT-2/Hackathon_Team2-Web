import styled from 'styled-components';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import '../.././../node_modules/slick-carousel/slick/slick-theme.css';
import '../.././../node_modules/slick-carousel/slick/slick.css';

import logoImage from '../../assets/logo.png';
import glassesImage from '../../assets/search-gray.svg';
import bookmarkImage from '../../assets/bookmark2.svg';
import bellImage from '../../assets/bell.svg';
import navigationImage from '../../assets/navigation.svg';

export const StyledSlider = styled(Slider)`
  height: 100%; // 슬라이드 컨테이너 영역
  width: 100%;

  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    background: gray;
  }

  .slick-slide {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    cursor: pointer;
  }

  .slick-dots {
    bottom: 20px;
    margin-top: 20px; /* Adjust this value according to your layout */
  }

  .slick-track {
    width: 100%;
  }
`;

export const wrapAll = styled.div`
  height: 100%;
  position: relative;
  overflow-x: hidden;
  margin-bottom: 24px;
`;

export const wrapTop = styled.div`
  background-color: white;
  position: fixed;
  padding: 0 8px;
  padding-top: 50px;
  z-index: 1;
  border: none;
  display: flex;
  flex-direction: row;
  padding-bottom: 12px;
  width: 100%;
`;

export const logo = styled.div`
  margin-left: 5px;
  background-image: url(${logoImage});
  background-size: cover;
  height: 40px;
  width: 40px;
`;

export const inputBackground = styled.div`
  flex: 1;
  position: relative;
  margin-left: 14px;
  width: 214px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 0px solid #000;
  background: #e9e9e9;
`;

export const inputGlasses = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  background-image: url(${glassesImage});
  background-size: cover;
  width: 24px;
  height: 24px;
`;

export const inputArea = styled.input`
  position: absolute;
  top: 10px;
  left: 40px;
  width: 150px;
  background: transparent;
  border: none;
  color: #838383;
  text-align: left;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const bookmark = styled.div`
  margin-left: 7px;
  margin-top: 7px;
  background-image: url(${bookmarkImage});
  height: 24px;
  width: 24px;
`;

export const bell = styled.div`
  margin-left: 7px;
  margin-top: 7px;
  background-image: url(${bellImage});
  height: 24px;
  width: 24px;
`;

export const wrapCarousel = styled.div`
  margin-top: 30%;
  width: 100%;
  aspect-ratio: 1.527 / 1;
  background: #d9d9d9;
`;

export const carouselPicture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  // border: 2px solid red; /* 디버깅 용도 */
`;

export const gridContainer = styled.div`
  display: grid;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 33.3% 33.3% 33.3%;
`;

export const gridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const gridPicture = styled.div`
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  width: 52px;
  height: 52px;
`;

export const gridWrite = styled.div`
  color: #222;
  text-align: center;
  font-family: SF Pro Text;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const categoryTitle = styled.div`
  color: #222;
  margin-left: 23px;
  margin-top: 52px;
  text-align: left;
  font-family: SF Pro Text;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.3px;
`;

export const categoryExplanation = styled.div`
  color: #727272;
  text-align: left;
  margin-left: 23px;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const wrapCircleLine = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  white-space: nowrap;
  margin-top: 24px;
  margin-left: 10px;
`;

export const locationCircle1 = styled.div`
  background-color: #ffdcdc;
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-left: 14px;
  aspect-ratio: 1 / 1;
`;

export const locationCircle = styled.div`
  background-image: url(${(props) => props.imageurl});
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* 여기서 마지막 값(0.5)은 투명도를 나타냅니다. 0에 가까울수록 어둡게 됩니다. */
  background-blend-mode: multiply; /* 이미지와 배경색을 섞는 블렌딩 모드를 설정합니다. */
  background-size: cover;
  background-position: center;
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-left: 14px;
  aspect-ratio: 1 / 1;
`;

export const locationTriangle = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 15%;
  left: 25%;
  background-image: url(${navigationImage});
`;

export const myLocation = styled.div`
  position: absolute;
  color: #ff8200;
  top: 60%;
  left: 20%;
  text-align: center;
  font-family: SF Pro Text;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const wantLocation = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  color: white;
  text-align: center;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const wantLocation2 = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  color: white;
  text-align: center;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const wantLocation3 = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  color: white;
  text-align: center;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const wrapHotPlace = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  white-space: nowrap;
  margin-top: 24px;
  margin-left: 10px;
  margin-bottom: 80px;
`;

export const wrapRestaurant = styled.div`
  display: flex;
  flex-direction: column;
`;

export const restaurantPicture = styled.button`
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 5%;
  margin-left: 14px;
  aspect-ratio: 1 / 1;
  border: 0px solid #eee;
`;

export const restaurantName = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  color: black;
  text-align: left;
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const restaurantInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const restaurantRate = styled.span`
  color: black;
  text-align: left;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: bold;
  font-weight: 500;
`;

export const restaurantInfo = styled.span`
  color: gray;
  margin-left: 5px;
  margin-top: 2px;
  text-align: left;
  font-family: SF Pro Text;
  font-size: 10px;
  font-style: normal;
`;

export const wrapBottom = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  padding: 0 8px;
  padding-bottom: 20px;
  z-index: 1;
  border: none;
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  width: 100%;
`;

export const bottomGrid = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const bottomPicture = styled.div`
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  width: 32px;
  height: 32px;
`;
