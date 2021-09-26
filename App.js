import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "./src";
import { Center, NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Page />
        </Center>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
