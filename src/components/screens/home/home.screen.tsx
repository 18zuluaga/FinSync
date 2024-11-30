import React from 'react';
import { ImageBackground, Text, View} from 'react-native';
import { styles } from './css/home.style';

export default function HomeScreen() {
  console.log('HomeScreen');
  return (
    <View>
      <ImageBackground style={styles.header} resizeMode='stretch'  source={require('../../../assets/backfround.png')}>
        <Text>hola</Text>
      </ImageBackground>
    </View>
  );
}
