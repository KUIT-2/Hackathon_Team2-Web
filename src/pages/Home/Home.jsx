import React, { useState } from 'react';
import * as S from './Home.Styles';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import '../.././../node_modules/slick-carousel/slick/slick-theme.css';
import '../.././../node_modules/slick-carousel/slick/slick.css';


import { useNavigate } from 'react-router';
import { MenuData, carouselData, hotPlaceArrData, locArrData } from './Homedata';


export default function Home() {
  const navigate = useNavigate();
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
          {carouselData.map((value) => {
            return (
              <S.carouselPicture src={value} />
            )
          })}
        </S.StyledSlider>
      </S.wrapCarousel>

      <S.gridContainer>
        {MenuData.map((value) => {
          return (
            <S.gridItem>
              <S.gridPicture imageurl={value.Image} alt=' ' />
              <S.gridWrite>{value.Title}</S.gridWrite>
            </S.gridItem>
          )
        })}
      </S.gridContainer>

      <S.categoryTitle>어디로 가시나요?</S.categoryTitle>

      <S.wrapCircleLine>
        <S.locationCircle1>
          <S.locationTriangle />
          <S.myLocation>내주변</S.myLocation>
        </S.locationCircle1>
        {locArrData.map((value) => {
          if (!value.locArr) return <></>;
          if (value.locArr.length === 1) {
            return (
              <S.locationCircle imageurl={value.imgUrl} alt=' '>
                <S.wantLocation3>{value.locArr[0]}</S.wantLocation3>
              </S.locationCircle>
            );
          } else if (value.locArr.length === 2) {
            return (
              <S.locationCircle imageurl={value.imgUrl} alt=' '>
                <S.wantLocation>{value.locArr[0]}</S.wantLocation>
                <S.wantLocation2>{value.locArr[1]}</S.wantLocation2>
              </S.locationCircle>
            );
          } else {
            return <></>;
          }
        })}
      </S.wrapCircleLine>

      <S.categoryTitle>웨이팅 핫플레이스 BEST</S.categoryTitle>
      <S.categoryExplanation>
        핫 한 웨이팅 라인업, 이제 캐치테이블에서!
      </S.categoryExplanation>
      <S.wrapHotPlace>
        {hotPlaceArrData.map((value) => {
          return (
            <S.wrapRestaurant onClick={() => navigate(`store/${value.ID}`)}>
              <S.restaurantPicture imageurl={value.Picture} />
              <S.restaurantName>{value.Name}</S.restaurantName>
              <S.restaurantInfoLine>
                <S.restaurantRate>★ {value.Rate}</S.restaurantRate>
                <S.restaurantInfo>{value.Type} · {value.Loc}</S.restaurantInfo>
              </S.restaurantInfoLine>
            </S.wrapRestaurant>
          )
        })}
      </S.wrapHotPlace>
    </S.wrapAll>
  );
}
