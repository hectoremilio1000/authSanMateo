import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/logoSanMateo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
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
        <CustomButton onPress={onSignInPressed} text="Iniciar sesión" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Has Olvidado tu contraseña"
          type="SECONDARY"
        />
        <CustomButton
          onPress={onSignUp}
          text="No tienes cuenta? Crea una"
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
