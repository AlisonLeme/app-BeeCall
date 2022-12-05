import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Linking,
  TouchableOpacity
} from "react-native";

import axios from "axios";
import { Entypo } from "@expo/vector-icons";

import * as Animatable from "react-native-animatable";

const Welcome = ({ route, navigation }) => {
  const [calls, setCalls] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const ComponentCalls = ({ item }) => {
    return (
      <View style={styles.contextAllCalls}>
        <Text style={styles.text}> Criador: {item.host} </Text>
        <Text style={styles.text}> Assunto: {item.title} </Text>
        <Text style={styles.text}> Descrição: {item.description} </Text>
        <Text style={styles.text}> Data: {item.date} </Text>
        <Text style={styles.text}> Hora: {item.time} </Text>
        <Text style={styles.text}> Plataforma: {item.plataform} </Text>
        <Text style={styles.text}> Link reunião: {item.link}</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 2 }}> Participantes:</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={item.participants}
        renderItem={({ item, index }) => (
          <Text style={styles.text}> - {item}</Text>
        )}
      />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(item.link)}
        >
          <Text style={styles.buttonText}>Ir para reunião</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  useEffect(() => {
    getCalls()
  }, []);

  const getCalls = () => {
    const uri = "https://api-kox9zsndz-alisonleme.vercel.app";
    axios
      .get(`${uri}/api/calls/`)
      .then((res) => {
        const result = res.data;

        const myCalls = result.filter((r) => {
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Entypo name="user" size={40} />
        <Text style={styles.textUser}>Seja bem vindo(a) {route.params.params.name}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={calls}
        renderItem={({ item }) => <ComponentCalls item={item} />}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true)
          getCalls()
          setRefreshing(false)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD543",
  },
  containerUser: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textUser: {
    fontSize: 20
  },
  contextAllCalls: {
    backgroundColor: "#faf4e0",
    padding: 10,
    marginBottom: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20
  },
  button: {
    backgroundColor: "#0D99FF",
    width: "60%",
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 14,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Welcome;
