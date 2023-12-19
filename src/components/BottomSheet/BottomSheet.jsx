import React from 'react';
import { BottomSheetWrapper, ChildrenWrapper } from './BottomSheet.styles';

export default function BottomSheet({ heightPer, children }) {
  return (
    <BottomSheetWrapper>
      <ChildrenWrapper heightper={heightPer}>{children}</ChildrenWrapper>
    </BottomSheetWrapper>
  );
}
