import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ValidationItemContainer, TipsWrap, Footer } from './lib';

interface ValidationLayoutProps {
  tipsNode?: ReactNode;
  footerNode?: ReactNode;
}

export const ValidationLayout: React.FC<ValidationLayoutProps> = ({
  children,
  tipsNode,
  footerNode,
}) => {
  return (
    <ValidationItemContainer>
      <TipsWrap>{tipsNode}</TipsWrap>
      <InfoContainer>{children}</InfoContainer>
      <Footer>{footerNode}</Footer>
    </ValidationItemContainer>
  );
};

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
