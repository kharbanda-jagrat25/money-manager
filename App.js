import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigator from './AppNavigator';

import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins.ttf')
  });
};

export default function App() {
  const [isFontsLoaded, setFontsLoaded] = useState(false);

  if (!isFontsLoaded) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={(error) => console.error(error)}
        />
      </GestureHandlerRootView>

    );
  }
  return <AppNavigator />;
}
