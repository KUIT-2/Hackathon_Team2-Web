import React, { useState } from 'react';
import * as S from './Home.Styles';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import '../.././../node_modules/slick-carousel/slick/slick-theme.css';
import '../.././../node_modules/slick-carousel/slick/slick.css';

import best23Image from '../../assets/71e2f9df-96d1-4066-a0c6-f36c6fcc8373.png';
import onlinewaitingImage from '../../assets/5f6f1ae4-922d-4d39-81bf-0f928649973a.png';
import hiddenplaceImage from '../../assets/c9cae830-fc28-4211-8736-0e775714db25.png';
import cakeImage from '../../assets/efce9144-9bed-49f9-a7b3-24c016d4acd2.png';
import misikspotImage from '../../assets/ce8375a9-bfa9-46fe-836d-6f8f5ea757a6.png';
import yearendReservationImage from '../../assets/8564e344-7f5b-482d-925e-70ebf11823ff.png';
import groupReservationImage from '../../assets/51b6ccb0-3583-421a-9e6f-21bd4e9e9fb3.png';
import wineDeliveryImage from '../../assets/11f122ad-33ab-47ef-a1cd-96a9f7793765.png';
import MonthlyBestImage from '../../assets/c28a81e3-4e96-4e60-9ebc-2ea390497a7c.png';
import mealKitImage from '../../assets/71e2f9df-96d1-4066-a0c6-f36c6fcc8373.png';
import waitingTopImage from '../../assets/bf75f992-b5c7-4f9e-8c39-b3bf67580549.png';
import omakaseImage from '../../assets/6cfacb9a-ed22-46bd-933c-c332a3003380.png';
import umakaseImage from '../../assets/c653cca4-4440-44a0-93bc-878e856bc34a.png';
import hotelDiningImage from '../../assets/1f2b8e47-74da-443d-8c6f-b9b80a28a67a.png';
import saveTopImage from '../../assets/a86d7036-e7ea-4e13-8be7-03404245e4da.png';

import apgujeongImage from '../../assets/0706apgujeong.jpg';
import itaewonImage from '../../assets/0706itaewon.jpg';
import busanImage from '../../assets/busan_.jpg';
import sungsooImage from '../../assets/0706sungsoo.jpg';
import gwanghwamunImage from '../../assets/0706gwanghwamun.jpg';
import jejuImage from '../../assets/jeju_.jpg';
import daeguImage from '../../assets/0307_location_daegu@2x.png';

import carousel1Image from '../../assets/561947da-dbd2-454e-bd8e-23f9f8e7aff3.png';
import carousel2Image from '../../assets/f145ce95-3c0c-45fa-b070-69a47a7b5991.png';
import carousel3Image from '../../assets/c3275a3c-f328-4a8f-9003-78a05a6462c6.png';
import carousel4Image from '../../assets/9ce5cba9-b3e9-4e01-b20c-1026e565fa53.png';
import carousel5Image from '../../assets/9b3557d7-9827-4de2-8628-ad57b8bb460a.png';
import carousel6Image from '../../assets/9b009b5b-a59b-4917-8645-4e933a27f305.png';
import carousel7Image from '../../assets/96956292-29fc-4cc2-8d3e-4377f73bff3d.png';
import carousel8Image from '../../assets/863a52c8-8868-488b-8a5f-2a5d9e680fa3.png';

import restaurant1Image from '../../assets/9d39d68c-0988-44c8-93ad-4515774b3b9a.png';
import restaurant2Image from '../../assets/265db003-b24c-4a3e-b80f-2d68ab0f5c51.png';
import restaurant3Image from '../../assets/b052ffc1-28fb-45f3-a648-bee5c75e4852.png';
import restaurant4Image from '../../assets/67f66c0f-3809-484f-92d2-96f4371397e2.png';
import restaurant5Image from '../../assets/b9e85d2f-84a6-449d-9ca1-99564493855a.png';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  const [locationArr, setLocationArr] = useState([
    {
      imgUrl: apgujeongImage,
      locArr: ['압구정', '청담'],
    },
    {
      imgUrl: itaewonImage,
      locArr: ['이태원', '한남'],
    },
    {
      imgUrl: busanImage,
      locArr: ['부산'],
    },
    {
      imgUrl: sungsooImage,
      locArr: ['성수'],
    },
    {
      imgUrl: gwanghwamunImage,
      locArr: ['광화문', '종로'],
    },
    {
      imgUrl: jejuImage,
      locArr: ['제주'],
    },
    {
      imgUrl: daeguImage,
      locArr: ['진주'],
    },
    {
      imgUrl: apgujeongImage,
      locArr: ['울산'],
    },
    {
      imgUrl: itaewonImage,
      locArr: ['광주'],
    },
    {
      imgUrl: sungsooImage,
      locArr: ['전주'],
    },
    {
      imgUrl: jejuImage,
      locArr: ['대전'],
    },
    {
      imgUrl: busanImage,
      locArr: ['군산'],
    }

  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.wrapAll>
      <S.wrapTop>
        <S.logo />
        <S.inputBackground>
          <S.inputGlasses />
          <S.inputArea placeholder='지역, 음식, 레스토랑명 검색' />
        </S.inputBackground>
        <S.bookmark />
        <S.bell />
      </S.wrapTop>
      <S.wrapCarousel>
        <S.StyledSlider {...settings}>
          <S.carouselPicture src={carousel1Image} />
          <S.carouselPicture src={carousel2Image} />
          <S.carouselPicture src={carousel3Image} />
          <S.carouselPicture src={carousel4Image} />
          <S.carouselPicture src={carousel5Image} />
          <S.carouselPicture src={carousel6Image} />
          <S.carouselPicture src={carousel7Image} />
          <S.carouselPicture src={carousel8Image} />
        </S.StyledSlider>
      </S.wrapCarousel>

      <S.gridContainer>
        <S.gridItem>
          <S.gridPicture imageurl={best23Image} alt=' ' />
          <S.gridWrite>23년베스트</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={onlinewaitingImage} alt=' ' />
          <S.gridWrite>온라인웨이팅</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={hiddenplaceImage} alt=' ' />
          <S.gridWrite>히든플레이스</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={cakeImage} alt=' ' />
          <S.gridWrite>케이크</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={misikspotImage} alt=' ' />
          <S.gridWrite>미식스팟</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={yearendReservationImage} alt=' ' />
          <S.gridWrite>연말예약</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={groupReservationImage} alt=' ' />
          <S.gridWrite>모임예약</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={wineDeliveryImage} alt=' ' />
          <S.gridWrite>와인배송</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={MonthlyBestImage} alt=' ' />
          <S.gridWrite>이달의맛집</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={mealKitImage} alt=' ' />
          <S.gridWrite>밀키트</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={waitingTopImage} alt=' ' />
          <S.gridWrite>웨이팅TOP</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={omakaseImage} alt=' ' />
          <S.gridWrite>오마카세</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={umakaseImage} alt=' ' />
          <S.gridWrite>우마카세</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={hotelDiningImage} alt=' ' />
          <S.gridWrite>호텔다이닝</S.gridWrite>
        </S.gridItem>
        <S.gridItem>
          <S.gridPicture imageurl={saveTopImage} alt=' ' />
          <S.gridWrite>저장TOP</S.gridWrite>
        </S.gridItem>
      </S.gridContainer>

      <S.categoryTitle>어디로 가시나요?</S.categoryTitle>

      <S.wrapCircleLine>
        <S.locationCircle1>
          <S.locationTriangle />
          <S.myLocation>내주변</S.myLocation>
        </S.locationCircle1>
        <S.locationCircle imageurl={apgujeongImage} alt=' '>
          <S.wantLocation>압구정</S.wantLocation>
          <S.wantLocation2>청담</S.wantLocation2>
        </S.locationCircle>
        <S.locationCircle imageurl={itaewonImage} alt=' '>
          <S.wantLocation>이태원</S.wantLocation>
          <S.wantLocation2>한남</S.wantLocation2>
        </S.locationCircle>
        <S.locationCircle imageurl={busanImage} alt=' '>
          <S.wantLocation3>부산</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={sungsooImage} alt=' '>
          <S.wantLocation3>성수</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={gwanghwamunImage} alt=' '>
          <S.wantLocation>광화문</S.wantLocation>
          <S.wantLocation2>종로</S.wantLocation2>
        </S.locationCircle>
        <S.locationCircle imageurl={jejuImage} alt=' '>
          <S.wantLocation3>제주</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={daeguImage} alt=' '>
          <S.wantLocation3>진주</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={apgujeongImage} alt=' '>
          <S.wantLocation3>울산</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={itaewonImage} alt=' '>
          <S.wantLocation3>광주</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={sungsooImage} alt=' '>
          <S.wantLocation3>전주</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={jejuImage} alt=' '>
          <S.wantLocation3>대전</S.wantLocation3>
        </S.locationCircle>
        <S.locationCircle imageurl={busanImage} alt=' '>
          <S.wantLocation3>군산</S.wantLocation3>
        </S.locationCircle>
      </S.wrapCircleLine>

      <S.categoryTitle>웨이팅 핫플레이스 BEST</S.categoryTitle>
      <S.categoryExplanation>
        핫 한 웨이팅 라인업, 이제 캐치테이블에서!
      </S.categoryExplanation>
      <S.wrapHotPlace>
        <S.wrapRestaurant onClick={() => navigate('store/1')}>
          <S.restaurantPicture imageurl={restaurant1Image} />
          <S.restaurantName>고에몬 홍대AK점</S.restaurantName>
          <S.restaurantInfoLine>
            <S.restaurantRate>★ 3.8</S.restaurantRate>
            <S.restaurantInfo>일식 파스타 · 홍대</S.restaurantInfo>
          </S.restaurantInfoLine>
        </S.wrapRestaurant>

        <S.wrapRestaurant>
          <S.restaurantPicture imageurl={restaurant2Image} />
          <S.restaurantName>타코튜즈데이</S.restaurantName>
          <S.restaurantInfoLine>
            <S.restaurantRate>★ 4.5</S.restaurantRate>
            <S.restaurantInfo>멕시코음식 · 성수</S.restaurantInfo>
          </S.restaurantInfoLine>
        </S.wrapRestaurant>

        <S.wrapRestaurant>
          <S.restaurantPicture imageurl={restaurant3Image} />
          <S.restaurantName>맛집막국수</S.restaurantName>
          <S.restaurantInfoLine>
            <S.restaurantRate>★ 4.3</S.restaurantRate>
            <S.restaurantInfo>국수,냉면 · 안성</S.restaurantInfo>
          </S.restaurantInfoLine>
        </S.wrapRestaurant>

        <S.wrapRestaurant>
          <S.restaurantPicture imageurl={restaurant4Image} />
          <S.restaurantName>이재모피자 본점</S.restaurantName>
          <S.restaurantInfoLine>
            <S.restaurantRate>★ 4.5</S.restaurantRate>
            <S.restaurantInfo>피자 · 부산 남포동</S.restaurantInfo>
          </S.restaurantInfoLine>
        </S.wrapRestaurant>

        <S.wrapRestaurant>
          <S.restaurantPicture imageurl={restaurant5Image} />
          <S.restaurantName>태닝돈</S.restaurantName>
          <S.restaurantInfoLine>
            <S.restaurantRate>★ 4.3</S.restaurantRate>
            <S.restaurantInfo>돼지고기 · 부산 광안리</S.restaurantInfo>
          </S.restaurantInfoLine>
        </S.wrapRestaurant>
      </S.wrapHotPlace>
    </S.wrapAll>
  );
}
