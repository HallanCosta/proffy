import React from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//import backgroundImg from '../../../assets/backgroundImg.png';
import backgroundImg from '../../../assets/images/create-account-third-background.png';

import { 
  Container,
  BackgroundContainer,
  Background,
  BorderCheck,
  Title,
  Description,
  TextButtonMakeLogin
} from './styles';

import { styles } from './styles';


const CreateAccountThirdScreen: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate('Login');
  }

  return (
    <Container>
      <BackgroundContainer>
        <Background
          source={backgroundImg}
        >
          <BorderCheck>
            <Feather name="check" size={35} color="#04D361" />
          </BorderCheck>

          <Title>
            Cadastro { '\n' } 
            Concluído
          </Title>

          <Description>
            Agora você faz parte da { '\n' }
            plataforma da Proffy
          </Description>

        </Background>

        <RectButton
          style={styles.ButtonMakeLogin}
          onPress={handleNavigateToLogin}
        >
          <TextButtonMakeLogin>Fazer Login</TextButtonMakeLogin>
        </RectButton>
      </BackgroundContainer>
    </Container>
  );
}

export { CreateAccountThirdScreen };