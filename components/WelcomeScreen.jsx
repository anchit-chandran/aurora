import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { router, Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

function MainText() {
  return (
    <View>
      <Text style={[styles.text]}>Welcome to</Text>
      <View style={styles.auroraView}>
        <Image
          source={require("@/assets/images/main-logo.png")}
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
    <LinearGradient
      colors={["rgb(251,210,217)", "rgb(120,181,254)", "rgb(171,239,255)"]}
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
              router.push("onboarding");
            }}
          >
            Let's get started
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    main: {
      flex: 1,
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
