import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { NavigationContainer } from "@react-navigation/native";

import { store, persistor } from "./src/store";

import MainStack from "./src/stacks/MainStack";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
