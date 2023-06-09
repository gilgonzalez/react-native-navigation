import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const CatScreen = () => {

  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top + 20 , ...styles.globalMargin}}>
      <Text style={styles.title}>Cat Screen only accesible from drawer</Text>
    </View>
  );
};

export default CatScreen;
