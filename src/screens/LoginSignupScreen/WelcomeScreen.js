import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import deliver from "../../../assets/images/deliver.png";
import { colors, hr80 } from "../../globals/style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Foodie</Text>
      <View style={styles.logout}>
        <Image source={deliver} style={styles.deliver} />
      </View>

      <View style={hr80} />
      <Text style={styles.text}>
        {" "}
        Find Then best Food Around You At Lowest Price
      </Text>

      <View style={hr80} />

      <View style={styles.btnOut}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF4242",
    width: "100%",
    alignItems: "center",
    justifyContext: "center",
  },

  title: {
    fontSize: 40,
    color: colors.col1,
    textAlign: "center",
    marginTop: 70,
    marginVertical: 10,
    fontWeight: "200",
  },

  logout: {
    width: "90%",
    marginTop: 35,
    height: "30%",
    //   backgroundColor: '#32CD32',
    alignItems: "center",
  },

  deliver: {
    width: "100%",
    height: "100%",
    marginTop: 21,
  },

  text: {
    fontSize: 18,
    width: "80%",
    marginTop: 40,
    color: colors.col1,
    textAlign: "center",
  },

  btnOut: {
    flexDirection: "row",
    marginTop: 20,
  },

  btn: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text1,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});
export default WelcomeScreen;
