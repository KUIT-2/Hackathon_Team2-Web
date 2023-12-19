import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import backImg from '../../assets/back.svg';
import homeImg from '../../assets/home.svg';
import shareImg from '../../assets/share.svg';
import locationImg from '../../assets/location.svg';
import storeImg from '../../assets/ee45b3f0f27249b3821ff044e4a5ffdd.jpeg';
import bookMarkImg from '../../assets/bookmark.svg';
import {
  BookMarkBtn,
  BookMarkBtnImg,
  BookMarkBtnText,
  BookMarkIcon,
  CategoryBar,
  CategoryBtn,
  CategoryDescription,
  DescriptionSect,
  Footer,
  Header,
  Header1,
  Header2,
  Header3,
  HeaderBtns,
  Icon,
  IconBtn,
  Main,
  MapBtn,
  MapIcon,
  PickBtn,
  PickHeader3,
  PickSect,
  ReserveBtn,
  StoreImg,
  StoreImgNum,
  StoreImgNumSect,
  StoreImgSect,
} from './Store.styles';

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState('홈');
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <HeaderBtns>
          <IconBtn onClick={() => navigate(-1)}>
            <Icon src={backImg} alt='' />
          </IconBtn>
          <IconBtn onClick={() => navigate('/')}>
            <Icon src={homeImg} alt='' />
          </IconBtn>
        </HeaderBtns>
        <HeaderBtns>
          <IconBtn>
            <BookMarkIcon src={bookMarkImg} alt='' />
          </IconBtn>
          <IconBtn>
            <Icon src={shareImg} alt='' />
          </IconBtn>
        </HeaderBtns>
      </Header>
      <Main>
        <StoreImgSect>
          <StoreImg src={storeImg} alt='' />
          <StoreImgNumSect>
            <StoreImgNum>1/5</StoreImgNum>
          </StoreImgNumSect>
        </StoreImgSect>
        <DescriptionSect>
          <Header1>음식점 이름</Header1>
          <Header2>음식점 소개</Header2>
          <Header3>음식 종류,지역</Header3>
          <Header3>☆ X.X (XX)</Header3>
          <MapBtn>
            <MapIcon src={locationImg} alt='' />
          </MapBtn>
        </DescriptionSect>
        <PickSect>
          <PickHeader3>레스토랑 함께 고르기</PickHeader3>
          <PickBtn>+ 담기</PickBtn>
        </PickSect>
        <CategoryDescription>
          <CategoryBar>
            <CategoryBtn
              onClick={() => setSelectedCategory('홈')}
              selected={selectedCategory === '홈'}
            >
              홈
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('메뉴')}
              selected={selectedCategory === '메뉴'}
            >
              메뉴
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('사진')}
              selected={selectedCategory === '사진'}
            >
              사진(10)
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('리뷰')}
              selected={selectedCategory === '리뷰'}
            >
              리뷰(25)
            </CategoryBtn>
          </CategoryBar>
        </CategoryDescription>
      </Main>
      <Footer>
        <BookMarkBtn>
          <BookMarkBtnImg src={bookMarkImg} alt='' />
          <BookMarkBtnText>563</BookMarkBtnText>
        </BookMarkBtn>
        <ReserveBtn>예약하기</ReserveBtn>
      </Footer>
      <Outlet />
    </>
  );
}
