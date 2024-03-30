import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function AuroraLogoTextHeader() {
  return (
    <View style={styles.auroraView}>
      <Image
        source={require("@/assets/images/main-logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={[styles.text]}>Aurora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  auroraView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 40,
    color: "white",
    fontFamily: "MontserratSemiBold",
  },
});
