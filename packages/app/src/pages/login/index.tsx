import styled from '@emotion/styled';
import { FullScreenContainer } from '@/components';
import { LoginForm } from './login-form';
import {MicroApp,Link} from 'umi'

export default () => {
  return (
    <LoginContainer>
      <MicroVue/>
      <LinkVue3 to="/vue3">打开Vue3工程</LinkVue3>
      <LoginForm />
    </LoginContainer>
  );
};
const Vue3 = ({className})=>( <MicroApp name="vue3" className={className}/>)

const LinkVue3 = styled(Link)`
  right:20rem;
  top:20rem;
  position:absolute;
  border-width:1px;
  border-color:red ;
  padding:2rem;
  color:yellow;
`
const MicroVue = styled(Vue3)`
  height:100vh;
  width:60vw;
`
const LoginContainer = styled(FullScreenContainer)`
  display: flex;
  background-color: rebeccapurple;
`;

