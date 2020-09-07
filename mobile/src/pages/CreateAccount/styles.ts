import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

//styled() herança

export const Container = styled.View`
  background: #F0F0F7;
  padding-top: 64px; 
  padding-left: 32px;
  padding-right: 32px; 
  padding-bottom: 32px;
`;

export const Title = styled.Text`
  color: #32264D;
  font-size: 32px;
  line-height: 42px;
  font-family: Poppins_600SemiBold;
  margin-top: 50px;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 24px;
  color: #6A6180;
  font-family: Poppins_400Regular;
  margin-top: 20px;
  max-width: 210px;
`;

export const TitleForm = styled.Text`
  font-size: 24px;
  line-height: 26px;
  font-family: Poppins_600SemiBold;
  color: #32264D;
  margin-top: 100px;
`;

export const Form = styled.View``;

export const EmailInput = styled.TextInput`
  height: 64px;
  width: 100%;
  padding-left: 24px;
  padding-right: 55px;
  border-bottom-color: #E6E6F0;
  border-bottom-width: 1px;
  border-style: solid;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: #6A6180;
  background-color: #FFF;
  margin-top: 25px;
`;

export const LastNameInput = styled.TextInput`
  height: 64px;
  width: 100%;
  padding-left: 24px;
  padding-right: 55px;
  border-style: solid;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: #6A6180;
  background-color: #FFF;
`;


export const styles = StyleSheet.create({
  BackButton: {
    width: 30
  },

  NextButton: {
    height: 56,
    backgroundColor: '#DCDCE5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },

  NextButtonText: {
    color: '#9C98A6',
    fontSize: 16,
    lineHeight: 26
  }
})