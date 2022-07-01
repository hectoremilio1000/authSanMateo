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

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("Home");
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Crea tu nueva contraseña</Text>
        <CustomInput
          value={code}
          setValue={setCode}
          placeholder="Ingresa tu código"
          secureTextEntry={true}
        />
        <CustomInput
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Nueva contraseña"
          secureTextEntry={true}
        />

        <CustomButton onPress={onSubmitPressed} text="ENVIAR" />

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
