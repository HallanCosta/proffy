import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useAuth } from '../../contexts/auth';

import backgroundImg from '../../assets/images/background.png';
import introImg from '../../assets/images/intro.png';
import showPasswordIcon from '../../assets/images/icons/openEye.png';
import hidePasswordIcon from '../../assets/images/icons/closeEye.png';

import styles from './styles';

const Login: React.FC = () => {

  const [checked, setChecked] = useState<boolean>(false);
  const [secureText, setSecureText] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [formDataValid, setFormDataValid] = useState<boolean>(false);
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);

  const [purpleBorderInputEmail, setPurpleBorderInputEmail] = useState<boolean>(false);
  const [purpleBorderInputPassword, setPurpleBorderInputPassword] = useState<boolean>(false);

  const [passwordLabel, setPasswordLabel] = useState<boolean>(false);
  const [emailLabel, setEmailLabel] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const { signed, user, signIn } = useAuth();

  function handleFormDataValidate() {
    if (formData.email.length > 0 && formData.password.length > 0) {
      setFormDataValid(true);
      setEnableSubmit(true);
    } else {
      setFormDataValid(false);
      setEnableSubmit(false);
    }
    formData.email.length > 0 && formData.password.length > 0 
    ? setFormDataValid(true)
    : setFormDataValid(false);
  }

  useEffect(() => {
    handleFormDataValidate();
  }, [formData.email, formData.password]);

  function handleSignIn() {
    signIn(formData, checked);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={ Platform.OS === 'ios' ? 'padding' : 'position'  }
      keyboardVerticalOffset={-100}
    >
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.background}
          source={backgroundImg}
        >
          <Image 
            style={styles.image}
            source={introImg}
          />
          
        </ImageBackground>
     </View>
      
      <View style={styles.form}>

        <View style={styles.groupHeader}>
          <Text style={styles.title}>Fazer login</Text>
          <Text style={styles.createAccount}>Criar uma conta</Text>
        </View>

        <View style={styles.groupInput}>
          
          <View style={styles.email}>
            
            <TextInput 
              style={[
                styles.inputEmail,
                purpleBorderInputEmail ? styles.purpleBorderInput : {},
                emailLabel ? styles.emailLabel : {}
              ]} 
              placeholder="E-mail"
              value={formData.email}
              autoCorrect={false}
              onFocus={() => setPurpleBorderInputEmail(true)}
              onBlur={() => setPurpleBorderInputEmail(false)}
              onChangeText={value => {
                setFormData({ ...formData, email: value });

                value.length > 0 ? setEmailLabel(true) : setEmailLabel(false);
              }}
            />

            {emailLabel && <Text style={styles.label}>E-mail</Text>}
          </View>


          <View style={styles.password}>
            <TextInput 
              style={[
                styles.inputPassword,
                purpleBorderInputPassword ? styles.purpleBorderInput : {},
                passwordLabel ? styles.passwordLabel : {}
              ]} 
              placeholder="Senha"
              value={formData.password}
              autoCorrect={false}
              secureTextEntry={hidePassword ? true : false}
              onFocus={() => setPurpleBorderInputPassword(true)}
              onBlur={() => setPurpleBorderInputPassword(false)}
              onChangeText={value => {
                setFormData({ ...formData, password: value });

                setFormDataValid(true);

                value.length > 0 ? setPasswordLabel(true) : setPasswordLabel(false);
              }}
            />
            {passwordLabel && <Text style={styles.label}>Senha</Text>}
            
            <BorderlessButton
              style={[
                styles.buttonEyeIconPassword,
                passwordLabel ? styles.buttonEyeIconPasswordLabel : {}
              ]}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image
                style={styles.showPasswordIcon}
                source={hidePassword ? showPasswordIcon : hidePasswordIcon} 
                resizeMode="contain"
              />  
            </BorderlessButton>
          </View>
        </View>

        <View style={styles.groupFooter}>
          <View style={styles.remember}>

          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#04D361"
            onPress={() => {
              setChecked(!checked);
            }}
          />
            <Text style={styles.footerText}>Lembrar-me</Text>
          </View>
          <Text style={styles.footerText}>Esqueci minha senha</Text>
        </View>

        <RectButton
          style={[
            styles.submit,
            formDataValid ? styles.submitValid : {}
          ]}
          enabled={enableSubmit}
          onPress={handleSignIn}
        >
          <Text style={[
            styles.submitText,
            formDataValid ? styles.submitTextValid : {}
          ]}>
            Entrar
          </Text>
        </RectButton>

      </View>
      
    </KeyboardAvoidingView>
  )
}

export default Login;