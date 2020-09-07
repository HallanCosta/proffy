import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { 
  Container, 
  Title,
  Description, 
  TitleForm, 
  Form, 
  EmailInput, 
  LastNameInput,
  styles
} from './styles';

const CreateAccount: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate('Login');
  }

  return (
    <Container>
      <BorderlessButton
        style={styles.BackButton}
        onPress={handleNavigateToLogin}
      >
        <Feather name="arrow-left" size={24} color="#9C98A6" />
      </BorderlessButton>

      <Title>
        Crie sua {' \n'}
        conta gratuíta
      </Title>

      <Description>Basta preencher esses dados e você estará conosco.</Description>

      <TitleForm>01. Quem é você</TitleForm>
      <Form>
        <EmailInput 
          placeholder="Nome"
        />
        <LastNameInput 
          placeholder="Sobrenome"
        />

        <RectButton
          style={styles.NextButton}
        >
          <Text style={styles.NextButtonText}>Próximo</Text>
        </RectButton>
      </Form>
    </Container>
  );
}

export default CreateAccount;