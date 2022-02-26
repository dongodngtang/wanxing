import styled from '@emotion/styled';
import { FullScreenContainer } from '@/components';
import { LoginForm } from './login-form';

export default () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

const LoginContainer = styled(FullScreenContainer)`
  display: flex;
  background-color: rebeccapurple;
`;
