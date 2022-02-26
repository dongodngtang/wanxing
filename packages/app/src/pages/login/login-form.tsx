import { Card, Tabs, Form, Input } from 'antd';
import { useState } from 'react';
import styled from '@emotion/styled';
import { ButtonNoPadding } from '@/components';
import { SendMessageButton } from './send-message-button';
import {useAuth} from '@/context/auth-context'

const { TabPane } = Tabs;

type LoginType = 'password' | 'verifycode';

const rules = {
  account: [
    {
      require: true,
      message: '请填写账号',
    },
  ],
  password: [
    {
      require: true,
      message: '请输入密码',
    },
  ],
  mobile: [
    {
      require: true,
      message: '请输入手机号码',
    },
  ],
  verifycode: [
    {
      require: true,
      message: '请输入验证码',
    },
  ],
};

export const LoginForm = () => {
  const [loginType, setLoginType] = useState<LoginType>('password');

  const { login: setLogin,isLogin } = useAuth();
  console.log('%c 🍤 isLogin: ', 'font-size:12px;background-color: #FCA650;color:#fff;', isLogin);
  const [passwordForm] = Form.useForm();
  const [verifyCodeForm] = Form.useForm();

  const submit = () => {
      console.log('提交',loginType)
    if (loginType === 'password') {
      passwordForm.submit();
    } else {
      verifyCodeForm.submit();
    }
  };

  const onFinish = (formData: any) => {
    console.log(
      '%c 🍫 formData: ',
      'font-size:12px;background-color: #F5CE50;color:#fff;',
      formData,
    );
    // 通过校验后到达这里
    if (loginType === 'password') {
        // todo 
    } else {
        // todo
    }
    // 设置登录状态
    setLogin()
  };

  return (
    <LoginFormWarp>
      <Title>欢迎您使用本系统</Title>
      <Tabs
        activeKey={loginType}
        onChange={(value) => setLoginType(value as LoginType)}
        centered
      >
        <TabPane tab={'账号密码登录'} key={'password'}>
          <Form form={passwordForm} onFinish={onFinish}>
            <FormItem name={'account'} rules={rules['account']}>
              <LoginInput type="text" placeholder={'请输入登录账号'} />
            </FormItem>
            <FormItem name={'password'} rules={rules['password']}>
              <LoginInput
                type="password"
                placeholder={'请输入登录密码(8-16位英文字母、数字、字符组合)'}
              />
            </FormItem>
          </Form>
        </TabPane>
        <TabPane tab={'手机验证码登录'} key={'verifycode'}>
          <Form form={verifyCodeForm} onFinish={onFinish}>
            <FormItem name={'mobile'} rules={rules['mobile']}>
              <LoginInput type="text" placeholder={'请输入手机号码'} />
            </FormItem>
            <FormItem name={'verifycode'} rules={rules['verifycode']}>
              <LoginInput
                type="text"
                placeholder={'请输入验证码'}
                suffix={<SendMessageButton />}
              />
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>

      <LoginButton type={'primary'} onClick={submit}>
        登录
      </LoginButton>
    </LoginFormWarp>
  );
};

const LoginFormWarp = styled(Card)`
  width: 55rem;
  min-height: 40rem;
  padding: 4rem;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
  position: fixed;
  top: 50%;
  right: 10rem;
  transform: translateY(-50%);
  .ant-card-body {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: 2rem;
`;
const LoginButton = styled(ButtonNoPadding)`
  color: white;
  background-color: #1890ff;
  width: 100%;
  height: 6rem;
  border-radius: 0.6rem;
  margin-top: 5rem;
`;

const FormItem = styled(Form.Item)`
  .ant-form-item-explain-error {
    text-align: left;
  }
`;

const LoginInput = styled(Input)`
  height: 6rem;
  border: 1px solid #e9e6ef;
  border-radius: 0.6rem;
  font-size: 1.6rem;
`;
