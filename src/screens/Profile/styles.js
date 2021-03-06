import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #ccc;
`;

export const Form = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-bottom: 10px;
`;

export const Divider = styled.View`
  align-self: stretch;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Logout = styled(Button)`
  align-self: stretch;
  background: #d44059;
`;
