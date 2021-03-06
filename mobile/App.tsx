import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <>
      <NavigationContainer independent={true}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>

      <StatusBar style="light" />
    </>
  )
 
}