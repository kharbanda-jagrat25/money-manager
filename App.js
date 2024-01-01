import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import AppNavigator from "./AppNavigator";

import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins": require("./assets/fonts/Poppins.ttf")
  });
};

export default function App() {
  const [isFontsLoaded, setFontsLoaded] = useState(false);

  if (!isFontsLoaded) {
    return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={(error) => console.error(error)}
        />

    );
  }
  return <AppNavigator />;
}
