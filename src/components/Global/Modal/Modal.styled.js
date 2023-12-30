import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  padding: 24px 12px 24px 12px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};

  @media screen and (min-width: 768px) {
    padding: 32px 24px 32px 24px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 36px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: ${({ theme: { colors } }) => colors.primeryBlue};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.2);
    stroke: ${({ theme: { colors } }) => colors.secondary5};
  }
`;

export const Title = styled.h2`
  line-height: 36px;
  margin-bottom: 24px;
`;