import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

const SettingsScreen = ({navigation} : Props) => {
  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}>SettingsScreen</Text>
      <Button title = "Back" onPress={() => navigation.pop()}/>
      <Button title = "Home PopToTop" onPress = {() => navigation.popToTop()}/>
    </View>
  );
};

export default SettingsScreen;
