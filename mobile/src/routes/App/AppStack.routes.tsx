import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/Login';
import Landing from '../../pages/Landing';
import GiveClasses from '../../pages/GiveClasses';
import StudyTabs from './StudyTabs.routes';

const AppStack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Landing" component={Landing} />
      <AppStack.Screen name="GiveClasses" component={GiveClasses} />
      <AppStack.Screen name="Study" component={StudyTabs} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;