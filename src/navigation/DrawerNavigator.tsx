import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CatScreen from '../screens/CatScreen';
import { Image, View, useWindowDimensions,TouchableOpacity,Text } from 'react-native';
import { styles } from '../theme/appTheme';
import SettingsScreen from '../screens/SettingsScreen';
import { Tabs } from './TabNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { width } = useWindowDimensions();
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}>
      <Drawer.Screen options={{ title: 'Inicio' }} name="Tabs" component={Tabs} />
      <Drawer.Screen options={{title:'Home'}}name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen options={{title:'Home'}}name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen options={{title:'Cats'}}name="CatScreen" component={CatScreen} />

    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const DrawerContent = ({navigation} : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView >
      {/** Avatar */ }
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }} />
      </View >
      {/** Opciones de Menu */}
      <View style={styles.menuContainer} >
        <TouchableOpacity
        onPress={() => navigation.navigate('Tabs')}
        style={styles.menuItemButton}>
          <Text style={styles.menuItemText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.menuItemButton}>
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('SettingsScreen')}
        style={styles.menuItemButton}>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('CatScreen')}
        style={styles.menuItemButton}>
          <Text style={styles.menuItemText}>Cats</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );

};
