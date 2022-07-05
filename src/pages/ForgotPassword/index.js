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

const ForgotPasswordScreen = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");
  // const { height } = useWindowDimensions();

  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = async data => {
    const { username } = data;
    try {
      await Auth.forgotPassword(username);
      navigation.navigate("NewPassword", { username });
    } catch (error) {
      console.log(error);
    }
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Vuelve a crear tu password</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Usuario"
          rules={{
            required: "Ingresa tu usuario",
          }}
        />

        <CustomButton onPress={handleSubmit(onSendPressed)} text="ENVIAR" />

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
