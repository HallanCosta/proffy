import React, { useState, useEffect } from 'react';
import { Text, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import api from '../../../services/api';

import dotEnabled from '../../../assets/images/icons/dotEnabled.png';
import dotDisabled from '../../../assets/images/icons/dotDisabled.png';

import { 
  styles,
  Title,
  Description, 
  TitleForm, 
  Form, 
  GroupInput,
  EmailInput, 
  EmailLabel,
  PasswordInput,
  PasswordLabel,
  Header,
  Section
} from './styles';

interface Params {
  name: string;
  lastname: string;
}

export type PropsEmailInput = {
  title: boolean;
}

export type PropsPasswordInput = {
  title: boolean;
}

const CreateAccountSecondScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const route = useRoute();
  const { name, lastname } = route.params as Params;

  const [formData, setFormData] = useState({
    name,
    lastname,
    email: '',
    password: '',
    photo: `https://ui-avatars.com/api/?name=${name}+${lastname}`
  });

  const [emailLabel, setEmailLabel] = useState<boolean>(false);
  const [passwordLabel, setPasswordLabel] = useState<boolean>(false);
  const [isFormDataValid, setIsFormDataValid] = useState<boolean>(false);

  function handleNavigateToPrimaryScreen() {
    navigate('CreateAccountPrimaryScreen');
  }

  function handleEmailInput(value: string) {
    setFormData({ ...formData, email: value });
    setEmailLabel(value.length > 0 ? true : false);
  }

  function handlePasswordInput(value: string) {
    setFormData({ ...formData, password: value });
    setPasswordLabel(value.length > 0 ? true : false);
  }

  function handleFormDataValidate() {
    setIsFormDataValid(
      formData.email.length > 2 && formData.password.length > 2 
      ? true 
      : false
    );
  }

  useEffect(() => {
    handleFormDataValidate();
  }, [formData.email, formData.password]);

  async function handleRegister() {
    await api.post('create-account', formData);

    navigate('CreateAccountThirdScreen');
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
        <GroupInput>
          <EmailInput 
            placeholder="Email"
            onChangeText={value => handleEmailInput(value)}
            title={emailLabel}
            value={formData.email}
          />
          {emailLabel && <EmailLabel>Email</EmailLabel>}
        </GroupInput>

        <GroupInput>
          <PasswordInput 
            placeholder="Senha"
            onChangeText={value => handlePasswordInput(value)}
            title={passwordLabel}
            value={formData.password}
          />
          {passwordLabel && <PasswordLabel>Senha</PasswordLabel>}
        </GroupInput>


        <RectButton
          style={[
            styles.nextButtonDisabled,
            isFormDataValid ? styles.nextButtonEnabled : {}
          ]}
          onPress={handleRegister}
          enabled={isFormDataValid}
        >
          <Text style={[
            styles.nextButtonTextDisabled,
            isFormDataValid ? styles.nextButtonTextEnabled : {}
          ]}>Concluir cadastro</Text>
        </RectButton>
      </Form>
    </KeyboardAvoidingView>
  );
}

export default CreateAccountSecondScreen;