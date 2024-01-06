import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { colors, titles, btn1, hr80 } from "../../globals/style";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [PhoneFocus, setPhoneFocus] = useState(false);
  const [NameFocus, setNameFocus] = useState(false);

  const [PasswordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [ConformPasswordFocus, setConformPasswordFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign Up</Text>

      <View style={styles.inputOut}>
        <AntDesign
          name="user"
          size={24}
          color={NameFocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onFocus={() => {
            setEmailFocus(false);
            setPasswordFocus(false);
            setShowPassword(false);
            setNameFocus(true);
            setPhoneFocus(false);
          }}
        />
      </View>

      <View style={styles.inputOut}>
        <MaterialCommunityIcons
          name="gmail"
          size={24}
          color={emailFocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
            setNameFocus(false);
            setPasswordFocus(false);
            setConformPasswordFocus(false);
          }}
        />
      </View>

      <View style={styles.inputOut}>
        <Feather
          name="smartphone"
          size={24}
          color={PhoneFocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onFocus={() => {
            setEmailFocus(false);
            setPhoneFocus(true);
            setPasswordFocus(false);
            setNameFocus(false);
            setConformPasswordFocus(false);
          }}
        />
      </View>

      {/* Password */}
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
            setConformPasswordFocus(false);
            setNameFocus(false);
            setPhoneFocus(false);
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

      {/* Conform_Password */}
      <View style={styles.inputOut}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={ConformPasswordFocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Conform_Password"
          onFocus={() => {
            setEmailFocus(false);
            setConformPasswordFocus(true);
            setPasswordFocus(false);
            setNameFocus(false);
            setPhoneFocus(false);
          }}
          secureTextEntry={showConformPassword === false ? true : false}
        />

        <Octicons
          name={showConformPassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowConformPassword(!showConformPassword)}
        />
      </View>

      <Text style={styles.address}> Please Enter Your Address </Text>
      <View style={styles.inputOut}>
        <TextInput style={styles.input} placeholder="Enter Your Address" />
      </View>

      <TouchableOpacity style={btn1}>
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btnTxt,
            fontWeight: "bold",
          }}
        >
          {" "}
          Sign Up
        </Text>
      </TouchableOpacity>
closed
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
        Already Have An Account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("LogIn")}
        >
          {" "}
          Sign In
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
    //
    marginTop: "12%",
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
    marginTop: 10,
    marginBottom: 10,
  },

  or: {
    marginTop: "0%",
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },

  gfTxt: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 20,
    marginTop: "0%",
  },

  gf: {
    flexDirection: "row",
    marginTop: 10,
  },

  gfIcon: {
    backgroundColor: "white",
    width: 50,
    marginHorizontal: 10,
    marginTop: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 10,
  },

  signup: {
    color: colors.text1,
  },

  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: "center",
    marginTop: "1%",
  },
});

export default SignupScreen;
