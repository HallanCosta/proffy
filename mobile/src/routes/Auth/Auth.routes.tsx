import React from 'react';

import Login from '../../pages/Login';
import { CreateAccountPrimaryScreen } from '../../pages/CreateAccount/PrimaryScreen';
import CreateAccountSecondScreen from '../../pages/CreateAccount/SecondScreen';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="CreateAccountPrimaryScreen" component={CreateAccountPrimaryScreen} />
    <AuthStack.Screen name="CreateAccountSecondScreen" component={CreateAccountSecondScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;