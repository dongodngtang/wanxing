import styled from '@emotion/styled';
import { Steps } from 'antd';

const { Step } = Steps;

interface StepsLineProps {
  current: number;
}

export const StepsLine = ({ current }: StepsLineProps) => {
  return (
    <StepsWrap>
      <CSteps
        progressDot={CustomDot}
        current={current}
        className={'custom-steps'}
      >
        <Step title="个人信息核验" />
        <Step title="人脸验证" />
        <Step title="屏幕录制" />
        <Step title="比赛须知" />
      </CSteps>
    </StepsWrap>
  );
};

const StepsWrap = styled.div`
  flex: 1;
  display: flex;
  width: 60%;
  align-items: center;
`;

const CSteps = styled(Steps)`
  &.custom-steps {
    .ant-steps-item-title {
      font-size: 1.8rem;
      user-select: none;
    }
  }
`;

const CustomDot: (...args: any[]) => any = (dot, { index }) => {
  return <Dot>{index + 1}</Dot>;
};

const Dot = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.6rem;
  transform: translate(-20%, -30%);
  cursor: pointer;
`;
