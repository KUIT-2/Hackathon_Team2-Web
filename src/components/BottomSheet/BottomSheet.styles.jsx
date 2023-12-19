import styled from "styled-components";

export const BottomSheetWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
export const ChildrenWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: ${(props) => props.heightper}%;
  border-radius: 5% 5% 0% 0%;
`;
