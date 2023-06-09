import { createStackNavigator } from '@react-navigation/stack';
import React  from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { PersonScreen } from '../screens/PersonScreen';
import CommunityScreen from '../screens/CommunityScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
  PersonScreen: { id: number, name: string };
  CommunityScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor : 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" options={{title : 'Home'	}}component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" options={{title : 'Profile'}}component={ProfileScreen} />
      <Stack.Screen name="SettingsScreen" options={{title : 'Settings'}}component={SettingsScreen} />
      <Stack.Screen name="PersonScreen" options={{title : 'Persona'}}component={PersonScreen} />
      <Stack.Screen name="CommunityScreen" options={{title : 'Community'}}component={CommunityScreen} />
    </Stack.Navigator>
  );
};

