import styled from '@emotion/styled';
import { Button } from 'antd';

interface WaitingViewProps {
  onBack: () => void;
  timeStr: string;
  isOverEnterTime: boolean;
}

export const WaitingView = ({
  onBack,
  timeStr,
  isOverEnterTime,
}: WaitingViewProps) => {
  return (
    <WaitingViewContainer>
      <>
        {isOverEnterTime ? (
          <>
            <h1>您已迟到30分钟，无法进入比赛</h1>
            <p>比赛开始30分钟后， 未登入系统的选手，将无法进入系统答题</p>
          </>
        ) : (
          <>
            <h1>距离比赛还有</h1>
            <h1>{timeStr}</h1>
            <p>比赛暂未开始</p>
            <p>只能提前30分钟进入比赛，请耐心等候</p>
          </>
        )}
      </>
      <Button type={'primary'} onClick={onBack}>
        返回
      </Button>
    </WaitingViewContainer>
  );
};

const WaitingViewContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
