import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, colors } from "../globals/style";

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="nav-icon-list-a"
        size={20}
        color="black"
        style={styles.myIcon}
      />

      <View style={styles.containerIn}>
        <Text style={styles.myText}> Foodie </Text>
        <MaterialCommunityIcons
          name="food-outline"
          size={26}
          color="black"
          style={styles.myIcon}
        />
      </View>

      <FontAwesome5
        name="user-circle"
        size={26}
        color="black"
        style={styles.myIcon}
      />
    </View>
  );
};

export default HomeHeadNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.col1,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  containerIn: {
    flexDirection: "row",
    alignItems: "center",
  },

  myIcon: {
    color: colors.text1,
  },

  myText: {
    color: colors.text1,
    fontSize: 24,
  },
});
