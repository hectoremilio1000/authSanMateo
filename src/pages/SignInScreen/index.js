import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/logoSanMateo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignInScreen = props => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (error) {
      Alert.alert("Revisa tu nombre o contraseña");
    }
    setLoading(false);
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
          name="username"
          placeholder="Email"
          control={control}
          rules={{ required: "Ingresa email" }}
        />
        <CustomInput
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          control={control}
          rules={{
            required: "Contraseña requerida",

            minLength: {
              value: 6,
              message: "Contraseña debe tener mínimo 8 caracteres mínimo",
            },
          }}
        />

        {/* <CustomInput
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
        /> */}

        {/* <TextInput placeholder={"password"} /> */}
        <CustomButton
          onPress={handleSubmit(onSignInPressed)}
          text={loading ? "Cargando ..." : "Iniciar sesión"}
        />
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
