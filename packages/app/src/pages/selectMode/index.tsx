import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { Card } from 'antd';
import { useReducerContext } from '@/context/reducer-context';
import { useFormatCountdown } from '../../hooks/useFormatCountdown';
import { WaitingView } from './waiting-view';
import { useHistory } from 'umi';
import { ROUTE_NAME } from '@/enum';
import { TimerView } from '@/components';

const beginTime = 1646205108318;

const SelectMode = () => {
  const { currentCompetition } = useReducerContext();
  useHeaderTitle(currentCompetition);

  const [isWaitingViewVisible, setWaitingViewVisible] = useState(false);

  const { startCount, day, hour, min, seconds, overtime } = useFormatCountdown(
    Math.floor((beginTime - Date._now()) / 1000),
  );

  const getCountdownStr = () => `${day}天 ${hour}小时 ${min}分 ${seconds}秒`;

  const history = useHistory();

  useEffect(() => {
    startCount();
  }, []);

  const onEnterCompetition = () => {
    const unstart = day > 0 || hour > 0 || min > 30;
    const isOvertime = min > 30 && overtime;
    if (unstart || isOvertime) {
      // 只能提前30分钟进入, 显示等待
      // 迟到30分钟不能进入
      setWaitingViewVisible(true);
      return;
    }
  };

  const onEnterPractise = () => {
    history.push(ROUTE_NAME.validation);
    return;
  };

  const isOverEnterTime = (day > 0 || hour > 0 || min > 30) && overtime;

  return (
    <SelectModeContainer>
      {isWaitingViewVisible ? (
        <WaitingView
          isOverEnterTime={isOverEnterTime}
          onBack={() => setWaitingViewVisible(false)}
          timeStr={getCountdownStr()}
        />
      ) : (
        <>
          <PositionView>
            <TimerView
              timestr={getCountdownStr()}
              prefixText={overtime ? '比赛已开始' : '距离比赛开始还有'}
            />
          </PositionView>
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

const PositionView = styled.div`
  position: absolute;
  top: 0;
  right: 5rem;
`;

export default SelectMode;
