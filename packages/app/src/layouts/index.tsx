import React from 'react';
import styled from '@emotion/styled';
import { PageHeader, FullScreenContainer } from '@/components';

const Index: React.FC = ({ children }) => {
  return (
    <LayContainer>
      <PageHeader />
      <LayoutMain>{children}</LayoutMain>
    </LayContainer>
  );
};

const LayContainer = styled(FullScreenContainer)`
  display: flex;
  flex-direction: column;
`;
const LayoutMain = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Index;
