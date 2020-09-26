import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #8257E5;
  padding-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const BackgroundContainer = styled.View`
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BorderCheck = styled.View`
  border: 4px solid #04D361;
  border-radius: 15px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 32px;
  color: #FFF;
  text-align: center;
  line-height: 37px;
  margin: 30px 0 0;
`;

export const Description = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: #D4C2FF;
  text-align: center;
  line-height: 24px;
  margin: 10px 0 0;
`;

export const TextButtonMakeLogin = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-family: Archivo_400Regular;
`;

export const styles = StyleSheet.create({
  ButtonMakeLogin: {
    height: 56,
    width: '100%',
    backgroundColor: '#04D361',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  }
 
});