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
import * as Linking from "expo-linking";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    Linking.openURL("https://www.laboratoriossanmateo.com/privacidad");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Correo electrónico"
          secureTextEntry={false}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <CustomInput
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          placeholder="Repite tu contraseña"
          secureTextEntry={true}
        />
        <CustomButton onPress={onRegisterPressed} text="Crea tu cuenta" />
        <Text style={styles.text}>
          Registrándote confirmas que aceptas nuestros{" "}
          <Text onPress={onTermsOfUsePressed} style={styles.link}>
            Términos de Uso{" "}
          </Text>{" "}
          y{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            {" "}
            Políticas de Privacidad
          </Text>{" "}
        </Text>
        <CustomButton
          onPress={onSignIn}
          text="Tienes una cuenta? Inicia Sesión"
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
  link: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
