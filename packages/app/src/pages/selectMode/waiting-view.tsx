import styled from '@emotion/styled';
import { Button } from 'antd';

interface WaitingViewProps {
  onBack: () => void;
  timeStr: string;
}

export const WaitingView = ({ onBack, timeStr }: WaitingViewProps) => {
  return (
    <WaitingViewContainer>
      <h1>距离比赛还有</h1>
      <h1>{timeStr}</h1>
      <p>比赛暂未开始</p>
      <p>只能提前30分钟进入比赛，请耐心等候</p>
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
