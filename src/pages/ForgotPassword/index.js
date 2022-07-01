import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Vuelve a crear tu password</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Ingresa tu email"
          secureTextEntry={false}
        />

        <CustomButton onPress={onSendPressed} text="ENVIAR" />

        <CustomButton
          onPress={onSignIn}
          text="Regresa a Iniciar Sesión"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    flex: 1,
    backgroundColor: "#EDF0F1",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
});

export default ForgotPasswordScreen;
