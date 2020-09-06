import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from  '../services/auth';
import api from  '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(userAccount: auth.UserAccount, checked: boolean): Promise<void>;
  signOut(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@ProffyAuth:user');
      const storagedToken = await AsyncStorage.getItem('@ProffyAuth:token');  
    
      if (storagedUser && storagedToken) {
        //api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      } 
      setLoading(false);
    }

    loadStoragedData();
  }, []);
  
  async function signIn(userAccount: auth.UserAccount, rememberMe: boolean) {
    const response = await auth.signIn(userAccount);
    
    if ("message" in response) {
      return Alert.alert('Falha na autenticação', 'Úsuario ou senha ínvalido!');
    }

    setUser(response.user);

    api.defaults.headers.Authorization = response.token;

    if (rememberMe) {
      await AsyncStorage.setItem('@ProffyAuth:user', JSON.stringify(response.user));
    }
 
    await AsyncStorage.setItem('@ProffyAuth:token', response.token);
  }


  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  
  
  return (
    <AuthContext.Provider 
      value={{ 
        signed: !!user, 
        user, 
        loading, 
        signIn, 
        signOut 
      }}
    >
      {children}
    </AuthContext.Provider> 
  );
} 

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;

