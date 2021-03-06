import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import { useAuth } from '../../contexts/auth';

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const { signOut, user } = useAuth();

  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState<number>(0);

  useEffect(() => {
    async function loadConnections() {
      const { total } = await api.get('connections');

      const userAsyncStorage = await AsyncStorage.getItem('@ProffyAuth:user');
      const tokenAsyncStorage = await AsyncStorage.getItem('@ProffyAuth:token');

      api.defaults.headers.Authorization = tokenAsyncStorage;

      setTotalConnections(total)
    }
    loadConnections();
  }, []);

  useEffect(() => {
    async function loadUser() {
      const userAsyncStorage = await AsyncStorage.getItem('@ProffyAuth:user');
      const tokenAsyncStorage = await AsyncStorage.getItem('@ProffyAuth:token');
      
      setTimeout(() => {
        console.log(user);
        console.log(userAsyncStorage);
        console.log(tokenAsyncStorage);
      }, 2000)
    }
    loadUser();
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  function handleSignOut() {
    signOut();
  }

  function handleProfile() {
    alert('levar pro perfil...')
  }

  return (
    <View style={styles.container}>

      <View style={styles.purpleContainer}>
        <View style={styles.header}>
          <RectButton
            onPress={handleProfile}
            style={styles.buttonProfile}
          >
            <Image 
              source={{ uri: user?.photo }} 
              style={styles.avatar} 
            />
            <Text style={styles.avatarName}>
              {user?.name}
            </Text>
          </RectButton>
          <BorderlessButton
            onPress={handleSignOut}
            style={styles.buttonLogout}
          >
            <Feather 
              name="power" 
              color="#fff"
              size={20}
            />   
          </BorderlessButton>
        </View>
        <Image source={landingImg} style={styles.banner} />
      </View>

      <View style={styles.whiteContainer}>
        <Text style={styles.title}>
          Seja bem-vindo(a), {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToStudyPages}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Image source={studyIcon} />

            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>

          <RectButton
            onPress={handleNavigateToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image source={giveClassesIcon} />

            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões já realizadas {' '}
          <Image source={heartIcon} />              
        </Text>
      
      </View>
      
    </View>
  );
}

export default Landing