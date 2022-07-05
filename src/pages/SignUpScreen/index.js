import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpScreen = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");
  const { height } = useWindowDimensions();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const pwd = watch("password");
  const pwd2 = watch("email");

  const navigation = useNavigation();

  const onRegisterPressed = async data => {
    const { username, password, email } = data;
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      navigation.navigate("ConfirmEmail", { username });
    } catch (error) {
      console.log(error);
    }
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
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Se requiere tu email",
            pattern: { value: EMAIL_REGEX, message: "Email no válido" },
          }}
        />
        <CustomInput
          name="username"
          control={control}
          placeholder="El usuario debe ser igual al correo electrónico"
          rules={{
            required: "Se requiere usuario",
            validate: value => value === pwd2 || "Email no es el mismo",
            pattern: { value: EMAIL_REGEX, message: "Email no válido" },
          }}
        />

        <CustomInput
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          control={control}
          rules={{
            required: "Contraseña requerida",

            minLength: {
              value: 8,
              message: "Contraseña debe tener mínimo 6 caracteres mínimo",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          placeholder="Repetir contraseña"
          secureTextEntry
          control={control}
          rules={{
            validate: value => value === pwd || "Contraseña no es la misma",
          }}
        />
        {/* <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Correo electrónico"
          secureTextEntry={false}
        /> */}
        {/* <CustomInput
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
        /> */}
        <CustomButton
          onPress={handleSubmit(onRegisterPressed)}
          text="Crea tu cuenta"
        />
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
