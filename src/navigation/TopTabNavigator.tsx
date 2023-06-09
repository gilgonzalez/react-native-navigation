import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import ContactsScreen from '../screens/ContactsScreen';
import ChatScreen from '../screens/ChatScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top : paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color}) => {
          let iconName: string = '';
          switch (route.name) {
              case 'Contact' :
                  iconName = '🐻';
              break;

              case 'Chat' :
                  iconName = '😅';
              break;

              case 'Album' :
                  iconName = '🎵';
              break;
          }
          return <Text style={{color, fontSize: 20}}>{ iconName }</Text>;
      },
      })}

    >
      <Tab.Screen name="Contact" component={ContactsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
