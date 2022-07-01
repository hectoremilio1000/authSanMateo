import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <SignUpScreen/> */}
      {/* <SignInScreen/> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EDF0F1",
  },
});
