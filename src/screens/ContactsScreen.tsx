import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';


const ContactsScreen = () => {
  const {signIn, authState, signOut } = useContext(AuthContext);
  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      <Text>{JSON.stringify(authState, null, 4) }</Text>
      <Button disabled={ authState.isLoggedIn} title="Sign In" onPress={() => signIn()}/>
      <Button color={colors.terciary} disabled={!authState.isLoggedIn} title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default ContactsScreen;
