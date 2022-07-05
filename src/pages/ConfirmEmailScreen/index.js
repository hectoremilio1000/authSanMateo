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
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  // const [code, setCode] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");
  // const { height } = useWindowDimensions();
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const username = watch("username");
  const navigation = useNavigation();

  const onConfirmedPressed = async data => {
    try {
      const response = await Auth.confirmSignUp(data.username, data.code);
      console.log(response);
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
    }
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  const ResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("El código se ha reenviado a tu correo");
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirma tu email</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Usuario"
          rules={{
            required: "Tu usuario es requerido",
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Código de Verificación enviado a Email"
          rules={{
            required: "Se requiere el código de confirmation",
          }}
        />
        {/* <CustomInput
          value={code}
          setValue={setCode}
          placeholder="Código de Verificación"
          secureTextEntry={true}
        /> */}

        <CustomButton
          onPress={handleSubmit(onConfirmedPressed)}
          text="Confirmar"
        />

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
