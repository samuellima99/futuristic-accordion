import styled, { css } from 'styled-components';
import Bg from '../../assets/images/bg.jpg';

export const Container = styled.section`
  height: 100vh;
  background: url(${Bg}) no-repeat center center;
  background-size: cover;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    z-index: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 32px;

  position: fixed;
`;

export const AccordionItem = styled.div<{ active: boolean; bg: string }>`
  width: ${({ active }) => (active ? '500px' : '110px')};
  height: 550px;
  padding: 32px;
  background: url(${({ bg }) => bg}) no-repeat center center;
  background-size: cover;
  border-radius: ${({ active }) => (active ? '32px' : '50px')};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: relative;

  cursor: pointer;
  overflow: hidden;

  transition: all 0.4s cubic-bezier(0.47, 0, 0.745, 0.715);

  h3 {
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    font-weight: 600;

    z-index: 1;

    transition: ${({ active }) => active && 'opacity 5s'};
  }

  p {
    opacity: 1;

    font-size: 16px;
    font-weight: 300;
    line-height: 24px;

    margin-top: 24px;
    color: rgba(230, 230, 230, 1);

    z-index: 1;

    transition: ${({ active }) => active && 'opacity 5s'};
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    bottom: -80px;

    background-color: rgba(0, 0, 0, 0.8);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    filter: blur(50px);
    z-index: 0;
  }

  ${({ active }) =>
    !active &&
    css`
      h3,
      p {
        visibility: hidden;
        opacity: 0;
      }
    `}
`;

export const CreditsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  position: absolute;
  bottom: 24px;
`;

export const CodeBy = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #bac4c8;

  line-height: 24px;
`;

export const UserName = styled(CodeBy)`
  color: #6f00ff;
`;
