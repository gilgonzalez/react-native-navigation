import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { }

export const PersonScreen = ({ route, navigation }: Props) => {

  const { id, name } = route.params;
  const { setUserName} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title : name,
    });
  }, []);
  useEffect(() => {
    setUserName(name);
  }, []);

  return (
    <View>
      <Text>{id} : { name}</Text>
    </View>
  );
};
