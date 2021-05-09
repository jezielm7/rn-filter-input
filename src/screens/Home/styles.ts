import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 0 20px;
  margin-top: 15px;
  justify-content: flex-start;
`;

export const TextField = styled.TextInput`
  height: 55px;
  color: #676767;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #676767;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 35px;
  padding: 0 20px 10px;
`;

export const Button = styled.TouchableOpacity`
`;

export const Card = styled.View`
  margin-top: 15px;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: #FFF;
  border: 0.5px solid #676767;
`;

export const Title = styled.Text`
  color: #676767;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #676767;
  font-size: 16px;
  margin-top: 5px;
`;
