import React from "react";
import { View, Text, StyleSheet } from "react-native";


type labelsProperties = {
  label: string;
  description: string;
};

const Data = ({ label, description }: labelsProperties) => {
  const styles = StyleSheet.create({
    labelText: {
      fontWeight: "bold", 
    },
  });

  return (
    <View>
      <Text>
        <Text style={styles.labelText}>{label}:</Text> {description}
      </Text>
    </View>
  );
};

export default Data;