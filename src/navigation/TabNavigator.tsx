import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/appTheme';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabIOS/>
    : <TabAndroid/>;
};

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.secondary}}
      activeColor={ '#242424'}
      inactiveColor="white"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0,
          fontSize: 15,
        },
        tabBarColor: colors.primary,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen' :
                        iconName = '💀';
                    break;

                    case 'TopTabNavigator' :
                        iconName = '👿';
                    break;

                    case 'StackNavigator' :
                        iconName = '👳‍♂️';
                    break;
                }
                return <Text style={{color}}>{ iconName }</Text>;
            },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Tab 1' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
};






const BottomTabIOS = createBottomTabNavigator();

export const TabIOS = ()=> {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen' :
                        iconName = 'T1';
                    break;

                    case 'Tab2Screen' :
                        iconName = 'T2';
                    break;

                    case 'StackNavigator' :
                        iconName = 'ST';
                    break;
                }
                return <Text style={{color}}>{ iconName }</Text>;
            },
      })}
      sceneContainerStyle={styles.background}

    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <TextIcon text="T1" color={props.color}  />  }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor : 'white',
  },
});

// screenOptions={ ({ route }) => ({
//   tabBarActiveTintColor: colors.primary,
//   tabBarStyle: {
//       borderTopColor: 'red',
//       borderTopWidth: 0,
//       elevation: 0
//   },
//   tabBarLabelStyle: {
//       fontSize: 15
//   },
//   tabBarIcon: (props) => {

//       let iconName: string = '';
//       switch(route.name) {
//           case 'Tab1Screen' :
//               iconName = 'T1'
//           break;

//           case 'Tab2Screen' :
//               iconName = 'T2'
//           break;

//           case 'StackNavigator' :
//               iconName = 'ST'
//           break;
//       }
//       return <Text style={{color: props.color}}>{ iconName }</Text>
//   }
// })}
