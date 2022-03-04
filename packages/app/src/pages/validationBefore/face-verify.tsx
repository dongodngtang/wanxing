import { useState, useEffect } from 'react';
import { ValidationLayout } from './validation-layout';
import { BaseVerifyComponentProps, FooterButton, FooterNode } from './lib';
import { Button, Image, Modal } from 'antd';
import styled from '@emotion/styled';
import { useCameraVideo } from './useCameraVideo';

interface FaceVerifyProps extends BaseVerifyComponentProps {}

export enum Status {
  idle = 0,
  start,
  finish,
}

export const FaceVerify = ({ prev, next }: FaceVerifyProps) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  const [modal, contextHolder] = Modal.useModal();

  const goPrev = () => {
    if (status === Status.idle) {
      prev?.();
    } else {
      setStatus(status - 1); // 返回上一步
    }
  };

  const skipSteps = () => {
    modal.confirm({
      title: '操作确认',
      centered: true,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        next?.();
      },
    });
  };

  const tipsNode = (
    <>
      <span>
        请您先调试摄像头，并拍照上传您的照片作为识别图像，在答题过程中，
        摄像功能将全程开启并录制。
      </span>
      <Button type="link" onClick={skipSteps}>
        跳过人脸验证
      </Button>
    </>
  );

  const getButton = () => {
    switch (status) {
      case Status.idle:
        return (
          <FooterButton
            type={'primary'}
            onClick={() => setStatus(Status.start)}
          >
            开始验证
          </FooterButton>
        );
      case Status.start:
        return (
          <FooterButton
            type={'primary'}
            onClick={() => setStatus(Status.finish)}
          >
            开始拍照
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

  const footerNode = <FooterNode goPrev={goPrev}>{getButton()}</FooterNode>;

  const { videoRef, startVideo } = useCameraVideo();

  useEffect(() => {
    if (status === Status.start) {
      startVideo();
    }
  }, [status]);

  return (
    <ValidationLayout tipsNode={tipsNode} footerNode={footerNode}>
      <FaceVerifyContainer>
        {status === Status.idle && <h1>请衣着整齐，平时屏幕，并正对光源</h1>}
        {status === Status.start && <Video ref={videoRef as any} autoPlay />}
        {status === Status.finish && (
          <Photo src="https://axhub.im/ax9/5899b9afbff26107/images/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%A0%B8%E9%AA%8C/u8.png" />
        )}
      </FaceVerifyContainer>
      {contextHolder}
    </ValidationLayout>
  );
};

const FaceVerifyContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  width: 26rem;
  height: 30rem;
  object-fit: cover;
  box-shadow: 0 0 10px grey;
`;

const Photo = styled(Image)`
  width: 26rem;
  height: auto;
`;
