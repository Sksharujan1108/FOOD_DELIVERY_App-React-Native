import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { colors } from "../globals/style";

// const carouselData = [
//   {
//     id: 1,
//     Image: '../../assets/OfferImage/img1.jpg',
//   },
//   {
//     id: 2,
//     Image: '../../assets/OfferImage/img2.png',
//   },
//   {
//     id: 3,
//     Image: '../../assets/OfferImage/img3.png',
//   },
//   {
//     id: 4,
//     Image: '../../assets/OfferImage/img4.png'
//   }
// ]

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          showsButtons={true}
          dotColor={colors.col1}
          activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}> › </Text>}
          prevButton={<Text style={styles.buttonText}> ‹ </Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferImage/img1.jpg")}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferImage/img2.png")}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferImage/img3.png")}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferImage/img4.png")}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: colors.text3,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
  },

  slide: {
    width: "100%",
    height: 200,
    backgroundColor: colors.text3,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: "white",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
  },
});

export default OfferSlider;
