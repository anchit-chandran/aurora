import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TailorExperience() {
  return (
    <View style={[styles.container.main]}>
      <Text style={[styles.text]}>Help us tailor your experience.</Text>
      <Text style={[styles.text]}>
        Your answers set the focus for your personalised wellness journey.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    main: {
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontFamily: "MontserratSemiBold",
    marginTop: 40,
  },
});
