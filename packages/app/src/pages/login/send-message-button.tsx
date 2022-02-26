import { useCountdown } from '@/hooks/useCountdown';
import { Button } from 'antd';

export const SendMessageButton = () => {
  const { count, startCount, isFinish, isIdle, isStartCount } =
    useCountdown(60);
  const send = () => {
    if (isStartCount) return;
    startCount();
  };

  const getText = () => {
    if (isIdle) {
      return '获取验证码';
    }
    if (isStartCount) {
      return count + 's';
    }
    if (isFinish) {
      return '重新获取';
    }
  };

  return (
    <Button type="link" onClick={send}>
      {getText()}
    </Button>
  );
};
