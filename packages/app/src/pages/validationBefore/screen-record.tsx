import { useState } from 'react';
import { BaseVerifyComponentProps, FooterButton, FooterNode } from './lib';
import { ValidationLayout } from './validation-layout';
import { Status } from './face-verify';

interface ScreenRecordProps extends BaseVerifyComponentProps {}

export const ScreenRecord = ({ next, prev }: ScreenRecordProps) => {
  const [status, setStatus] = useState<Status>(Status.idle);

  const goPrev = () => {
    if (status === Status.idle) {
      prev?.();
    } else {
      setStatus(status - 1);
    }
  };

  const getButton = () => {
    switch (status) {
      case Status.idle:
        return (
          <FooterButton
            type={'primary'}
            onClick={() => setStatus(Status.start)}
          >
            打开屏幕录制
          </FooterButton>
        );
      case Status.start:
        return (
          <FooterButton
            type={'primary'}
            onClick={() => setStatus(Status.finish)}
          >
            选择分享
          </FooterButton>
        );
      case Status.finish:
        return (
          <FooterButton type={'primary'} onClick={next}>
            下一步
          </FooterButton>
        );
    }
  };

  const tipsNode =
    '请选择分享整个屏幕，授权并开启屏幕录制功能。比赛过程中您的屏幕将被全程监控，请确保无多屏幕扩展显示，否则将识别为作弊。';

  const footerNode = <FooterNode goPrev={goPrev}>{getButton()}</FooterNode>;

  return (
    <ValidationLayout
      tipsNode={tipsNode}
      footerNode={footerNode}
    ></ValidationLayout>
  );
};
