import styled from '@emotion/styled';
import { Image } from 'antd';
import { BaseVerifyComponentProps, FooterButton } from './lib';
import { ValidationLayout } from './validation-layout';

interface PersonalInfoProps extends BaseVerifyComponentProps {}

export const PersonalInfoVerify = ({ next }: PersonalInfoProps) => {
  const tipsNode = '请仔细核对您的个人信息，确保信息和您本人一致';
  const footerNode = (
    <FooterButton type={'primary'} onClick={next}>
      信息无误，下一步
    </FooterButton>
  );
  return (
    <ValidationLayout tipsNode={tipsNode} footerNode={footerNode}>
      <Table>
        <tbody>
          <TableRow>
            <Label>真实姓名：</Label>
            <InfoWrap>李明心</InfoWrap>
          </TableRow>
          <TableRow>
            <Label>证件号码：</Label>
            <InfoWrap>350781196403072687</InfoWrap>
          </TableRow>
          <TableRow>
            <Label>本人照片:</Label>
            <InfoWrap>
              <Photo
                alt="照片"
                src="https://axhub.im/ax9/5899b9afbff26107/images/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%A0%B8%E9%AA%8C/u8.png"
              />
            </InfoWrap>
          </TableRow>
        </tbody>
      </Table>
    </ValidationLayout>
  );
};

const Photo = styled(Image)`
  width: 20rem;
  height: auto;
`;

const Table = styled.table`
  flex: 1;
  margin: 0 20%;
`;

const TableRow = styled.tr`
  td {
    vertical-align: top;
    height: 5rem;
  }
`;

const Label = styled.td`
  width: 25%;
  font-weight: bold;
`;
const InfoWrap = styled.td`
  text-align: left;
`;
