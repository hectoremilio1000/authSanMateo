import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import { useRoute } from "@react-navigation/native";

const NewPasswordScreen = () => {
  // const [code, setCode] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const username = watch("username");

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(username, data.code, data.password);
      navigation.navigate("SignIn");
    } catch (error) {}
    Alert.alert("Ha ocurrido algo, escribenos...", e.message);
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Crea tu nueva contraseña</Text>
        <CustomInput
          placeholder="Email"
          name="username"
          control={control}
          rules={{ required: "Se requiere Email" }}
        />

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: "Se requiere código" }}
        />
        <CustomInput
          placeholder="Ingresa tu nuevo password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Se requiere password",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomButton onPress={handleSubmit(onSubmitPressed)} text="ENVIAR" />

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

export default NewPasswordScreen;
