import { View, Text } from "react-native";
import React from "react";
import { Auth, Hub } from "aws-amplify";

const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Text>HomeScreen sweet</Text>
      <Text
        onPress={signOut}
        style={{
          width: "100%",
          textAlign: "center",
          color: "red",
          marginTop: "auto",
          marginVertical: 20,
          fontSize: 20,
        }}
      >
        Cerrar Sesión
      </Text>
    </View>
  );
};

export default HomeScreen;
