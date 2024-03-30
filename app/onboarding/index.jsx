import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AuroraLogoTextHeader from "@/components/onboarding/AuroraLogoTextHeader";
import TailorExperience from "@/components/onboarding/TailorExperience";
import { IconButton } from "react-native-paper";

export default function Onboarding() {
  return (
    <View style={[styles.container.main]}>
      <AuroraLogoTextHeader />
      <TailorExperience />
      <IconButton
        icon="right"
        color="white"
        mode="contained-tonal"
        size={40}
        style={{
          backgroundColor: "white",
          borderRadius: 10,
        }}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    main: {
      flex: 1,
      padding: 20,
      alignItems: "center",
    },
  },
  text: {
    textAlign: "center",
    fontSize: 36,
    color: "white",
    fontFamily: "MontserratSemiBold",
  },
  strapline: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontFamily: "MontserratSemiBold",
    marginTop: 40,
  },
  auroraView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  buttonText: {
    fontFamily: "MontserratSemiBold",
  },
});
