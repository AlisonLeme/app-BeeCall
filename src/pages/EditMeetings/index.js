import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable";

const EditMeetings = () => {
  return (
    <View style={styles.container}>
      <Text>Editar Reuniões</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD543",
  },
});

export default EditMeetings;
