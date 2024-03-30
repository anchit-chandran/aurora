import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { router, Link } from "expo-router";

function MainText() {
  return (
    <View>
      <Text style={[styles.text]}>Welcome to</Text>
      <View style={styles.auroraView}>
        <Image
          source={require("../assets/images/main-logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={[styles.text]}>Aurora</Text>
      </View>
      <Text style={styles.strapline}>It's nice to meet you!</Text>
    </View>
  );
}

function WelcomeScreen() {
  return (
    <View style={styles.container.main}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <MainText />
      </View>
      <View style={{ width: "100%", marginBottom: 50 }}>
        <Button
          mode="contained-tonal"
          labelStyle={styles.buttonText}
          buttonColor="white"
          onPress={() => {
            console.log("press");
            router.replace("/page2");
          }}
        >
          Let's get started
        </Button>
      </View>
    </View>
  );
}

// <LinearGradient
// colors={["rgb(251,210,217)", "rgb(120,181,254)", "rgb(171,239,255)"]}
// style={{
//   flex: 1,
//   width: "100%",
//   alignItems: "center",
//   justifyContent: "center",
// }}
// >

export default WelcomeScreen;

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
