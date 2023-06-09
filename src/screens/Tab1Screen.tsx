
import React from 'react';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import TextTouchable from '../components/TextTouchable';

const Tab1Screen = () => {
  const equipos = ['Real Betis',
    'Sevilla FC',
    'Real Madrid',
    'FC Barcelona',
    'Deportivo de',
    'Cádiz CF',
    'Málaga FC',
    'Mirandés' ];
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.globalMargin, {gap:20}]}>
      {equipos.map((club) => (
        <TextTouchable key={club} text={club} />
      )) }
    </View>
  );
};

export default Tab1Screen;

