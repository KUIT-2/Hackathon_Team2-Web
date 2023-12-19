import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import backImg from '../../assets/back.svg';
import homeImg from '../../assets/home.svg';
import shareImg from '../../assets/share.svg';
import locationImg from '../../assets/location.svg';
import storeImg from '../../assets/ee45b3f0f27249b3821ff044e4a5ffdd.jpeg';
import store2Img from '../../assets/f4cc8e02-8067-4b31-bfd0-8873981cbfc4.png';
import bookMarkImg from '../../assets/bookmark.svg';
import {
  BookMarkBtn,
  BookMarkBtnImg,
  BookMarkBtnText,
  BookMarkIcon,
  CaeraselItemWrapper,
  CaeraselWrapper,
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
  HomeBtn,
  HomeBtnDiv,
  HomeBtnText,
  HomeIcon,
  HomeSect,
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
import calendarImg from '../../assets/calendar.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import { useStore } from '../../store/useStore';

const storeInformData = {
  name: '센시티브서울',
  description: '감각적인 이탈리안 레스토랑',
  category: '이탈리아음식',
  location: '한남동',
  rate: 4.3,
  reviewNum: 333,
  pictureNum: 18,
  id: 1,
};

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState('홈');
  const [imageArr, setImageArr] = useState([storeImg, store2Img]);
  const [storeInform, setStoreInform] = useState(storeInformData);
  const [imageIndex, setImageIndex] = useState(0);
  const { storeId } = useParams();
  const setReservationStore = useStore((state) => state.setReservationStore);
  const navigate = useNavigate();
  const nextHandler = () => {
    setImageIndex(() => {
      if (imageIndex === imageArr.length - 1) {
        return 0;
      } else {
        return imageIndex + 1;
      }
    });
  };
  useEffect(() => {
    if (storeInform) {
      setReservationStore(storeInform);
    }
  }, [storeInform]);
  useEffect(() => {
    if (storeId) {
      fetch(`http://192.168.104.65:8080/store/detail/${storeId}`)
        .then((data) => data.json())
        .then((response) => {
          if (!response.ok) {
            throw new Error('network error 400 or 500');
          }
          setStoreInform({
            name: response.result.storeName,
            description: response.result.storeDesc,
            category: response.result.categoryName,
            location: response.result.address,
            rate: response.result.avgScore,
            reviewNum: 333,
            pictureNum: 18,
            id: storeId,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [storeId]);

  const prevHandler = () => {
    setImageIndex(() => {
      if (imageIndex === 0) {
        return imageArr.length - 1;
      } else {
        return imageIndex - 1;
      }
    });
  };
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
          <IconBtn onClick={nextHandler}>
            <BookMarkIcon src={bookMarkImg} alt='' />
          </IconBtn>
          <IconBtn>
            <Icon src={shareImg} alt='' />
          </IconBtn>
        </HeaderBtns>
      </Header>
      <Main>
        <StoreImgSect>
          {/* <StoreImg src={storeImg} alt='' /> */}
          <CaeraselWrapper imageindex={imageIndex}>
            {imageArr.map((image, index) => (
              <CaeraselItemWrapper key={index}>
                <img src={image} alt='' />
              </CaeraselItemWrapper>
            ))}
          </CaeraselWrapper>
          <StoreImgNumSect>
            <StoreImgNum>
              {imageIndex + 1}/{imageArr.length}
            </StoreImgNum>
          </StoreImgNumSect>
        </StoreImgSect>
        <DescriptionSect>
          <Header1>{storeInform.name}</Header1>
          <Header2>{storeInform.description}</Header2>
          <Header3>
            {storeInform.category},{storeInform.location}
          </Header3>
          <Header3>
            ☆ {storeInform.rate} ({storeInform.reviewNum})
          </Header3>
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
              사진({storeInform.pictureNum})
            </CategoryBtn>
            <CategoryBtn
              onClick={() => setSelectedCategory('리뷰')}
              selected={selectedCategory === '리뷰'}
            >
              리뷰({storeInform.reviewNum})
            </CategoryBtn>
          </CategoryBar>
          {selectedCategory === '홈' && (
            <HomeSect>
              <HomeBtn onClick={() => navigate('reservation1')}>
                <HomeBtnDiv>
                  <HomeIcon src={calendarImg} alt='' />
                  <HomeBtnText>오늘(목) 2명</HomeBtnText>
                </HomeBtnDiv>
                <HomeIcon src={arrowDownImg} alt='' />
              </HomeBtn>
            </HomeSect>
          )}
          {selectedCategory === '메뉴' && <div>메뉴</div>}
          {selectedCategory === '사진' && <div>사진</div>}
          {selectedCategory === '리뷰' && <div>리뷰</div>}
        </CategoryDescription>
      </Main>
      <Footer>
        <BookMarkBtn>
          <BookMarkBtnImg src={bookMarkImg} alt='' />
        </BookMarkBtn>
        <ReserveBtn onClick={() => navigate('reservation1')}>
          예약하기
        </ReserveBtn>
      </Footer>
      <Outlet />
    </>
  );
}
