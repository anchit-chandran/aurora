import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function TailorExperience() {
  return (
    <View style={[styles.container.main]}>
      <View style={[styles.container.text]}>
        <Text style={[styles.text]}>Help us tailor your experience.</Text>
        <Text style={[styles.text]}>
          Your answers set the focus for your personalised wellness journey.
        </Text>
      </View>
      <Image source={require("@/assets/images/mother-outline.png")} style={{
        
      }}></Image>
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
    text: {
      marginBottom: 40,
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
