import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import Navigation from "./src/navigation";
import { useEffect } from "react";

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EDF0F1",
  },
});

export default App;
