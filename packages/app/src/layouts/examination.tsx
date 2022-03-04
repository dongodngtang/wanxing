import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useFormatCountdown } from '@/hooks/useFormatCountdown';
import { Button } from 'antd';
import { useHistory } from 'umi';

const ExamLayout: React.FC = ({ children }) => {
  const beginTime = Date._now() + 10 * 1000; // 测试用

  const { min, seconds, startCount, overtime } = useFormatCountdown(
    Math.floor((beginTime - Date._now()) / 1000),
  );

  const isStart = (min === 0 && seconds === 0) || overtime;

  const history = useHistory();

  useEffect(() => {
    startCount();
  }, []);

  const onBack = () => {
    history.goBack();
  };

  if (isStart) {
    return <>{children}</>;
  }

  return (
    <ExamLayoutContainer>
      <WaitContainer>
        <h1>倒计时</h1>
        <CountWrap>{`${min}分 ${seconds}秒`}</CountWrap>
        <Tips>
          <p>发卷中，请耐心等候...</p>
          <p>倒计时结束后，系统将会自动进入答题页面</p>
        </Tips>
        <Button type={'primary'} onClick={onBack}>
          返回
        </Button>
      </WaitContainer>
    </ExamLayoutContainer>
  );
};

const ExamLayoutContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const CountWrap = styled.div`
  height: 30rem;
  width: 30rem;
  color: white;
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 50%;
`;

const WaitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tips = styled.div`
  margin-top: 2rem;
  p {
    text-align: center;
    font-size: 2rem;
  }
`;

export default ExamLayout;
