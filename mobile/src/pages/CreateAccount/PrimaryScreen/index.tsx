import React, { useState } from 'react';
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
  NameInput, 
  LastnameInput,
  Header,
  Section
} from './styles';

const CreateAccountPrimaryScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    lastname: ''
  });

  function handleNavigateToLogin() {
    navigate('Login');
  }

  function handleSecondScreen() {
    navigate('CreateAccountSecondScreen', formData);
  }

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
        <NameInput 
          placeholder="Nome"
          onChangeText={value => setFormData({ ...formData, name: value })}
        />
        <LastnameInput 
          placeholder="Sobrenome"
          onChangeText={value => setFormData({ ...formData, lastname: value })}
        />

        <RectButton
          style={styles.nextButton}
          onPress={handleSecondScreen}
          enabled={true}
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      </Form>
    </KeyboardAvoidingView>
  );
}

export default CreateAccountPrimaryScreen;