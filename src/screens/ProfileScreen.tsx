import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { styles } from '../theme/appTheme';

const ProfileScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}>ProfileScreen</Text>
      <Button title="Go to settings" onPress={() => navigate('SettingsScreen' as never)}/>
    </View>
  );
};

export default ProfileScreen;
