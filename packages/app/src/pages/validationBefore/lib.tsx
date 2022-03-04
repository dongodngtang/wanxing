import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';

export const ValidationItemContainer = styled.section`
  height: calc(100vh - 28rem);
  display: flex;
  flex-direction: column;
  padding: 2rem 20%;
  overflow-y: auto;
`;

export const TipsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 2rem;
  width: 100%;
  height: 10rem;
  background-color: var(--tips-bg-color);
  font-size: 1.8rem;
  border-radius: 0.4rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  height: 10rem;
`;

export const FooterButton = styled(Button)`
  width: 30%;
  height: 5rem;
`;

export interface BaseVerifyComponentProps {
  next?: () => void;
  prev?: () => void;
}

export const FooterNode: React.FC<{ goPrev: () => void }> = ({
  goPrev,
  children,
}) => {
  return (
    <React.Fragment>
      <FooterButton onClick={goPrev}>上一步</FooterButton>
      {children}
    </React.Fragment>
  );
};
