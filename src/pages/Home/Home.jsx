import React, { useEffect, useState } from 'react';
import * as S from './Home.Styles';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import '../.././../node_modules/slick-carousel/slick/slick-theme.css';
import '../.././../node_modules/slick-carousel/slick/slick.css';

import { Navigate, useNavigate } from 'react-router';
import Splash from '../../components/Splash/Splash';
import {
  MenuData,
  bottomData,
  carouselData,
  hotPlaceArrData,
  locArrData,
} from './Homedata';
import { useStore } from '../../store/useStore';

export default function Home() {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const setUserId = useStore((state) => state.setUserId);
  const [hotPlaceDataArr, setHotPlaceDataArr] = useState(hotPlaceArrData);
  const [isLoading, setIsLoading] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://192.168.104.65:8080/store/hotplace`)
      .then((data) => data.json())
      .then((response) => {
        // if (!response.ok) {
        //   // console.log(response);
        //   throw new Error('network error 400 or 500');
        // }
        console.log(response.result);

        if (response.result && response.result.length > 0) {
          // setHotPlaceDataArr([]);
          let dataArr = [];
          response.result.map((store, index) => {
            let editedIndex = index;
            if (index >= 5) {
              editedIndex = index % 5;
            }
            dataArr.push({
              ID: store.storeId,
              Picture: hotPlaceArrData[editedIndex].Picture,
              Name: store.storeName,
              Rate: Math.floor(store.stars * 10) / 10,
              Type: store.categoryName,
              Loc: store.address,
            });
          });
          setHotPlaceDataArr(dataArr);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);
  console.log(hotPlaceDataArr);
  if (isLoading) {
    return <Splash />;
  }

  if (!userId) {
    return <Navigate to={'login'} />;
  }
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
            return <S.carouselPicture src={value} />;
          })}
        </S.StyledSlider>
      </S.wrapCarousel>

      <S.gridContainer>
        {MenuData.map((value) => {
          return (
            <S.gridItem>
              <S.gridPicture imageurl={value.Image} alt='gridPicture' />
              <S.gridWrite>{value.Title}</S.gridWrite>
            </S.gridItem>
          );
        })}
      </S.gridContainer>

      <S.categoryTitle>어디로 가시나요?</S.categoryTitle>

      <S.wrapCircleLine className='scroll'>
        <S.locationCircle1>
          <S.locationTriangle />
          <S.myLocation>내주변</S.myLocation>
        </S.locationCircle1>
        {locArrData.map((value) => {
          if (!value.locArr) return <></>;
          if (value.locArr.length === 1) {
            return (
              <S.locationCircle imageurl={value.imgUrl} alt='locationCircle'>
                <S.wantLocation3>{value.locArr[0]}</S.wantLocation3>
              </S.locationCircle>
            );
          } else if (value.locArr.length === 2) {
            return (
              <S.locationCircle imageurl={value.imgUrl} alt='locationCircle'>
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
      <S.wrapHotPlace className='scroll'>
        {hotPlaceDataArr.map((value) => {
          return (
            <S.wrapRestaurant onClick={() => navigate(`store/${value.ID}`)}>
              <S.restaurantPicture imageurl={value.Picture} />
              <S.restaurantName>{value.Name}</S.restaurantName>
              <S.restaurantInfoLine>
                <S.restaurantRate>★ {value.Rate}</S.restaurantRate>
                <S.restaurantInfo>
                  {value.Type} · {value.Loc}
                </S.restaurantInfo>
              </S.restaurantInfoLine>
            </S.wrapRestaurant>
          );
        })}
      </S.wrapHotPlace>

      <S.wrapBottom>
        <S.bottomGrid>
          {bottomData.map((value, index) => {
            return (
              <S.bottomPicture
                imageurl={value}
                alt='bottomPicture'
                onClick={() => {
                  if (window.confirm('정말 로그아웃하시겠습니까?')) {
                    localStorage.removeItem('userId');
                    if (index === 4) setUserId(null);
                  }
                }}
              />
            );
          })}
        </S.bottomGrid>
      </S.wrapBottom>
    </S.wrapAll>
  );
}
