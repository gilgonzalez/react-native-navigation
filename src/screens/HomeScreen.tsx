
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({navigation}:Props) => {
  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}>HomeScreen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('SettingsScreen')} />
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('PersonScreen', {id: 1, name: 'Jose'})} >
        <Text style={styles.textContent}>Jose</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('PersonScreen', {id: 2, name: 'Maria'})} >
        <Text style={styles.textContent}>Maria</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
