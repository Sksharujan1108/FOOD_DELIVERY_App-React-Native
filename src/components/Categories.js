import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, colors } from "../globals/style";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}> Categories </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.myText}> Burger </Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.myText}> Pizza </Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.myText}> Noodles </Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.myText}> Burger </Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.myText}> Pizza </Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={24}
            color="black"
            style={styles.myIcon}
          />
          <Text style={styles.myText}> Noodles </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width: "100%",
    // height: 100,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
  },

  head: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: "300",
    margin: 10,
    alignSelf: "center",
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },

  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  myIcon: {
    marginRight: 10,
    color: colors.text3,
  },

  myText: {
    color: colors.text3,
  },
});
