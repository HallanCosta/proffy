import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './Auth/Auth.routes';
import AppRoutes from './App/AppStack.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;