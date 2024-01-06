import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { colors, titles, btn1, hr80 } from "../../globals/style";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>

      <View style={styles.inputOut}>
        <AntDesign
          name="user"
          size={24}
          color={emailFocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
          }}
        />
      </View>

      <View style={styles.inputOut}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={PasswordFocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setEmailFocus(false);
            setPasswordFocus(true);
          }}
          secureTextEntry={showPassword === false ? true : false}
        />

        <Octicons
          name={showPassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <TouchableOpacity
        style={btn1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btnTxt,
            fontWeight: "bold",
          }}
        >
          {" "}
          Sign In
        </Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gfTxt}>Sign In With</Text>

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <FontAwesome5 name="facebook" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={hr80}></View>
      <Text>
        {" "}
        Don't Have An Account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("SignUp")}
        >
          {" "}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },

  inputOut: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignSelf: 'center',
    elevation: 20,
  },

  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },

  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },

  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },

  gfTxt: {
    color: colors.text2,
    marginVertical: 10,
    fontSize: 25,
  },

  gf: {
    flexDirection: "row",
  },

  gfIcon: {
    backgroundColor: "white",
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 10,
  },

  signup: {
    color: colors.text1,
  },
});

export default LoginScreen;
