import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import * as auth from  '../services/auth';
import api from  '../services/api';

interface User {
  name: string;
  email: string;
}

interface UserAuthResponse { 
  token: string;
  user: {
    name: string;
    email: string;
  }
}

interface UserAccount {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(userAccount: UserAccount, checked: boolean): Promise<void>;
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
  
  async function signIn(userAccount: UserAccount, checked: Boolean) {
    const response = await auth.signIn(userAccount);
   
    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    if (checked) {
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

