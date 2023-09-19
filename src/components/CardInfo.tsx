import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Data from "./Data";

type properties = {
  image: string;
  name: string;
  language: string;
  region: string;
  capital?: string[];
};

const CardInfo = ({ image, name, language, region, capital }: properties) => {
  const styles = StyleSheet.create({
    card: {
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 14,
      flexDirection: "row", 
      alignItems: "center", 
    },
    image: {
      width: 120,
      height: 80,
      marginLeft: 45,
      marginTop: 15,
      
    },
    textContainer: {
      flex: 1, 
      padding: 10,

    },

  });


  return (
    <SafeAreaView style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.textContainer}>
        <Data label={"Nome"} description={name} />
        <Data label={"Capital"} description={capital?.length ? capital[0] : "--"} />
        <Data label={"Região"} description={region} />
        <Data label={"Língua"} description={language} />


      </View>
    </SafeAreaView>
  );
};

export default CardInfo;

