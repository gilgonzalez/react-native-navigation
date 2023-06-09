import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const TextTouchable = ({ text }: { text: string }) => {
  const { changeFavouriteTeam } = useContext(AuthContext);
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity style={styles.box} onPress={() => {
      changeFavouriteTeam(text);
      navigate('Chat' as never);
    }}>
      <Text style={ styles.innerText}>{ text}</Text>
    </TouchableOpacity>
  );
};

export default TextTouchable;

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginHorizontal:50,
    marginTop: 10,
  },
  innerText: {
    color: '#212121',
    fontSize: 20,
    alignSelf: 'center',
    fontFamily : 'Consolas',
  },
});
