import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      {/* <StackNavigator/> */}
       <DrawerNavigator />
      </AppState>

    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children}
    </AuthProvider>
  );
};

export default App;
