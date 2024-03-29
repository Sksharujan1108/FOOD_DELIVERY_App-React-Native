import { StyleSheet, View, Text, StatusBar, TextInput } from "react-native";
import React, { useState } from "react";
import HomeHeadNav from "../components/HomeHeadNav";
import Categories from "../components/Categories";
import OfferSlider from "../components/OfferSlider";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../globals/style";

import { firebase } from "../../Firebase/FirebaseConfig";

const HomeScreen = () => {
  const [foodData, setFoodData] = useState([]);

  // const foodRef = firebase. firestore(). collection('FoodData');

  // useEffect (() => {
  //    foodRef.onSnapshot(snapshot => {
  //       setFoodData(snapshot.docs.map(doc => doc.data()))
  //    })
  // })

  // console.log(foodData)

  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav />

      <View style={styles.searchBox}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchIcon}
        />

        <TextInput style={styles.input} placeholder="search" />
      </View>

      <Categories />
      <OfferSlider />
      {/* <Text>HomeScreen</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  searchBox: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 20,
    elevation: 10,
  },

  input: {
    marginLeft: 10,
    width: "90%",
    fontSize: 18,
    color: colors.text3,
  },

  searchIcon: {
    color: colors.text1,
  },
});
export default HomeScreen;
