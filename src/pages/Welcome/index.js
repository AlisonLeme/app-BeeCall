import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";

import * as Animatable from "react-native-animatable";

const Welcome = ({ route, navigation }) => {
  const [calls, setCalls] = useState([]);

  const ComponentCalls = ({ item }) => {
    return (
      <View style={styles.contextAllAlunos}>
        <Text style={styles.text}> Criador: {item.host} </Text>
      </View>
    );
  };

  useEffect(() => {
    const uri = "http://localhost:8080";
    axios
      .get(`${uri}/api/calls/`)
      .then((res) => {
        const result = res.data;

        const myCalls = result.map((r) => {
          let aux = false;
          if (route.params.params.email === r.host) {
            aux = true;
          } else {
            r.participants.forEach((e) => {
              if (e === route.params.params.email) {
                aux = true;
              }
            });
          }
          if (aux === true) {
            return r;
          }
        });

        setCalls(myCalls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(calls);

  return (
    <View style={styles.container}>
      <Text>Reuniões</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={calls}
        renderItem={({ item }) => <ComponentCalls item={item} />}
      />
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
