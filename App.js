import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "./src";
import { Center, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Page />
      </Center>
    </NativeBaseProvider>
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
