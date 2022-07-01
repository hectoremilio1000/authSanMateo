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

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onConfirmedPressed = () => {
    navigation.navigate("Home");
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  const ResendCode = () => {
    console.warn("reenviar el código");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirma tu email</Text>
        <CustomInput
          value={code}
          setValue={setCode}
          placeholder="Código de Verificación"
          secureTextEntry={true}
        />

        <CustomButton onPress={onConfirmedPressed} text="Confirmar" />

        <CustomButton
          onPress={ResendCode}
          text="Reenviar el código"
          type="QUARTERY"
        />
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

export default ConfirmEmailScreen;
