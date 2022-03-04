import styled from '@emotion/styled';

interface TimerViewProps {
  prefixText?: string;
  timestr: string;
}

export const TimerView = ({ prefixText, timestr }: TimerViewProps) => {
  return (
    <TimerWrap>
      {prefixText}
      <Timer>{timestr}</Timer>
    </TimerWrap>
  );
};

const TimerWrap = styled.p``;

const Timer = styled.span`
  color: red;
  font-size: 2rem;
`;
