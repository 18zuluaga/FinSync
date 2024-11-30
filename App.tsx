/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationCont } from './src/navigation/app.container.navigation';

function App(): React.JSX.Element {
  return (
      <SafeAreaProvider>
        <NavigationCont />
      </SafeAreaProvider>
  );
}

export default App;
