import React, { useState, useEffect } from 'react';
import { Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
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
  GroupInput,
  NameInput,
  NameLabel, 
  LastnameInput,
  LastnameLabel,
  Header,
  Section
} from './styles';

export type PropsNameInput = {
  title: boolean;
}

export type PropsLastnameInput = {
  title: boolean;
}

const CreateAccountPrimaryScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    lastname: ''
  });

  const [nameLabel, setNameLabel] = useState<boolean>(false);
  const [lastnameLabel, setLastnameLabel] = useState<boolean>(false);
  const [isFormDataValid, setIsFormDataValid] = useState<boolean>(false);

  function handleNavigateToLogin() {
    navigate('Login');
  }

  function handleSecondScreen() {
    navigate('CreateAccountSecondScreen', formData);
  }

  function handleNameInput(value: string) {    
    setFormData({ ...formData, name: value });
    setNameLabel(value.length > 0 ? true : false);
  }

  function handleLastnameInput(value: string) {    
    setFormData({ ...formData, lastname: value });
    setLastnameLabel(value.length > 0 ? true : false);
  }

  function handleFormDataValidate() {
    setIsFormDataValid(formData.name.length && formData.lastname.length > 0 ? true : false);
  }

  useEffect(() => {
    handleFormDataValidate();
  }, [formData.name, formData.lastname]);

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={ Platform.OS == 'ios' ? 'padding' : 'position' }
    >
      <Header>
        <BorderlessButton
          style={styles.backButton}
          onPress={handleNavigateToLogin}
        >
          <Feather name="arrow-left" size={24} color="#9C98A6" />
        </BorderlessButton>

        <Section>
          <Image style={styles.dotEnabled} source={dotEnabled} />
          <Image style={styles.dotDisabled} source={dotDisabled} />
        </Section>
      </Header>

      <Title>
        Crie sua {' \n'}
        conta gratuíta
      </Title>

      <Description>Basta preencher esses dados e você estará conosco.</Description>

      <TitleForm>01. Quem é você</TitleForm>
      <Form>
        <GroupInput>
          <NameInput 
            placeholder="Nome"
            onChangeText={value => handleNameInput(value)}
            title={nameLabel}
            value={formData.name}
          />
          {nameLabel && <NameLabel>Nome</NameLabel>}
        </GroupInput>

        <GroupInput>
          <LastnameInput 
            placeholder="Sobrenome"
            onChangeText={value => handleLastnameInput(value)}
            title={lastnameLabel}
            value={formData.lastname}
          />
          {lastnameLabel && <LastnameLabel>Sobrenome</LastnameLabel>}
        </GroupInput>

        <RectButton
          style={[
            styles.nextButtonDisabled,
            isFormDataValid ? styles.nextButtonEnabled : {}
          ]}
          onPress={handleSecondScreen}
          enabled={isFormDataValid}
        >
          <Text style={[
            styles.nextButtonTextDisabled,
            isFormDataValid ? styles.nextButtonTextEnabled : {}
          ]}>Próximo</Text>
        </RectButton>
      </Form>
    </KeyboardAvoidingView>
  );
}

export { CreateAccountPrimaryScreen };