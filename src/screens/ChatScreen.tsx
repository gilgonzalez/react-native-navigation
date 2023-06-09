import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import TextTouchable from '../components/TextTouchable';

const ChatScreen = () => {
  const { authState} = useContext(AuthContext);
  return (
    <View>
      <Text>CHAT SCREEN</Text>
      <Text>{`El usuario esta ${authState.isLoggedIn ? 'conectado' : 'desconectado'}`}</Text>
      {
        authState.favouriteTeam &&
        <TextTouchable  text={authState.favouriteTeam } />
      }
    </View>
  );
};

export default ChatScreen;
