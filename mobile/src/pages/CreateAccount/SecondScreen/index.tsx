import React from 'react';
import { Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import dotEnabled from '../../../assets/images/icons/dotEnabled.png';
import dotDisabled from '../../../assets/images/icons/dotDisabled.png';

import { 
  styles,
  Title,
  Description, 
  TitleForm, 
  Form, 
  EmailInput, 
  LastNameInput,
  Header,
  Section
} from './styles';

const CreateAccount: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToPrimaryScreen() {
    navigate('CreateAccountPrimaryScreen');
  }

  function handleRegister() {
    
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={ Platform.OS == 'ios' ? 'padding' : 'position' }
    >
      <Header>
        <BorderlessButton
          style={styles.backButton}
          onPress={handleNavigateToPrimaryScreen}
        >
          <Feather name="arrow-left" size={24} color="#9C98A6" />
        </BorderlessButton>

        <Section>
          <Image style={styles.dotDisabled} source={dotDisabled} />
          <Image style={styles.dotEnabled} source={dotEnabled} />
        </Section>
      </Header>

      <Title>
        Crie sua {' \n'}
        conta gratuíta
      </Title>

      <Description>Basta preencher esses dados e você estará conosco.</Description>

      <TitleForm>02. Email e Senha</TitleForm>
      <Form>
        <EmailInput 
          placeholder="Email"
        />
        <LastNameInput 
          placeholder="Senha"
        />

        <RectButton
          style={styles.nextButton}
          onPress={handleRegister}
        >
          <Text style={styles.nextButtonText}>Concluir cadastro</Text>
        </RectButton>
      </Form>
    </KeyboardAvoidingView>
  );
}

export default CreateAccount;