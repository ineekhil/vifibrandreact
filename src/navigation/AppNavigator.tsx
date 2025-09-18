import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import BrandsScreen from '../screens/BrandsScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import AllTasksScreen from '../screens/AllTasksScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Brands: undefined;
  AllEvents: undefined;
  AllTasks: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Brands" component={BrandsScreen} />
        <Stack.Screen name="AllEvents" component={AllEventsScreen} />
        <Stack.Screen name="AllTasks" component={AllTasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
