import styled from '@emotion/styled';
import { Modal, ModalFuncProps } from 'antd';
import { ReactNode } from 'react';

interface BlankAntdModalProps extends ModalFuncProps {
  children: ReactNode;
}

export const BlankAntdModal = ({ children, ...props }: BlankAntdModalProps) => {
  return (
    <CustomModal centered footer={null} closable={false} {...props}>
      {children}
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }
`;
