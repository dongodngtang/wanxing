import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { Card } from 'antd';
import { useReducerContext } from '@/context/reducer-context';
import { useBeginCountdown } from './useBeginCountdown';
import { WaitingView } from './waiting-view';
import { useHistory } from 'umi';

const SelectMode = () => {
  const { currentCompetition } = useReducerContext();
  useHeaderTitle(currentCompetition);

  const [isWaitingViewVisible, setWaitingViewVisible] = useState(false);

  const { startCount, ...timeObj } = useBeginCountdown(3600 * 25);
  const { day, hour, min, seconds } = timeObj;

  const getCountdownStr = () => `${day}天 ${hour}小时 ${min}分 ${seconds}秒`;

  const history = useHistory();

  useEffect(() => {
    startCount();
  }, []);

  const onEnterCompetition = () => {
    if (day > 0 || hour > 0 || min > 30) {
      // 只能提前30分钟进入, 显示等待
      setWaitingViewVisible(true);
      return;
    }
  };

  const onEnterPractise = () => {
  
    return;
  };

  return (
    <SelectModeContainer>
      {isWaitingViewVisible ? (
        <WaitingView
          onBack={() => setWaitingViewVisible(false)}
          timeStr={getCountdownStr()}
        />
      ) : (
        <>
          <TimerWrap>
            距离比赛开始还有<Timer>{getCountdownStr()}</Timer>
          </TimerWrap>
          <ItemCard onClick={onEnterCompetition}>进入比赛</ItemCard>
          <ItemCard onClick={onEnterPractise}>进入练习</ItemCard>
        </>
      )}
    </SelectModeContainer>
  );
};

const SelectModeContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5rem 10% 2rem;
`;

const ItemCard = styled(Card)`
  width: 40%;
  height: 50rem;
  border-radius: 0.6rem;
  box-shadow: 0 0 10px #e1e1e1;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  font-size: 4rem;
  p {
    font-size: 1.8rem;
  }
  .ant-card-body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(1.05);
    .ant-card-body {
      background-color: #a0b3e7;
      color: white;
    }
  }
`;

const Timer = styled.span`
  color: red;
  font-size: 2rem;
`;

const TimerWrap = styled.p`
  position: absolute;
  top: 0;
  right: 5rem;
`;

export default SelectMode;
