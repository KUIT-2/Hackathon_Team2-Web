import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { BottomSheetWrapper, ChildrenWrapper } from './BottomSheet.styles';

export default function BottomSheet({ heightPer, children }) {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        navigate(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, navigate]);
  return (
    <BottomSheetWrapper>
      <ChildrenWrapper ref={wrapperRef} heightper={heightPer}>
        {children}
      </ChildrenWrapper>
    </BottomSheetWrapper>
  );
}
