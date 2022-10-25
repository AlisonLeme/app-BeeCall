import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Reuniões</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD543",
  },
});

export default Welcome;
