import React, { useState } from "react";
import { Formik } from "formik";

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import axios from "axios";

const AddMeetings = ({ route, navigation }) => {

  const [participants, setParticipants] = useState([])

    
  
  const addInput = () => {
    setParticipants([...participants, ""])
  }
  
  const handleChangeParticipants = (value, index, item) => {
    participants[index] = value
    setParticipants([...participants])
  }

  const handleRemoveInput = (position) => {
    setParticipants([...participants.filter((participant, index) => index !== position )])
  }

  return (
    <ScrollView style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastrar chamadas</Text>
      </Animatable.View>
      <Formik
        initialValues={{ title: "", description: "", date: "", time: "", plataform: "", link: ""}}
        onSubmit={(values, { resetForm }) => {
          const data = {
            host: route.params.params.email,
            title: values.title,
            description: values.description,
            plataform: values.plataform,
            link: values.link,
            date: values.date,
            time: values.time,
            participants
          }

          const uri = "https://api-kox9zsndz-alisonleme.vercel.app";
          console.log(data)

          axios.post(`${uri}/api/calls`, data)
          .then((res) => {
            navigation.navigate("Welcome")
          })
          .catch(console.log)
          resetForm();
          setParticipants([])
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Assunto</Text>
            <TextInput
              id="title"
              onChangeText={handleChange("title")}
              value={values.title}
              placeholder="Digite o assunto da reunião..."
              style={styles.input}
            />

            <Text style={styles.title}>Descrição</Text>
            <TextInput
              id="description"
              onChangeText={handleChange("description")}
              value={values.description}
              placeholder="Digite a descrição da reunião..."
              style={styles.input}
            />

            <Text style={styles.title}>Data</Text>
            <TextInput
              id="date"
              onChangeText={handleChange("date")}
              value={values.date}
              keyboardType="numeric"
              placeholder="Digite a data da reunião: ex 30/11/2022..."
              style={styles.input}
            />

            <Text style={styles.title}>Hora</Text>
            <TextInput
              id="time"
              onChangeText={handleChange("time")}
              value={values.time}
              keyboardType="numeric"
              placeholder="Digite a hora da reunião: ex 14:30..."
              style={styles.input}
            />

            <Text style={styles.title}>Plataforma</Text>
            <TextInput
              id="plataform"
              onChangeText={handleChange("plataform")}
              value={values.plataform}
              placeholder="Digite a plataforma que será a reunião..."
              style={styles.input}
            />

            <Text style={styles.title}>Link</Text>
            <TextInput
              id="link"
              onChangeText={handleChange("link")}
              value={values.link}
              keyboardType='url'
              placeholder="Digite o link da reunião..."
              style={styles.input}
            />

            <View style={styles.containerMoreParticipants}>
              <Text style={{ fontSize: 20 }}>Participantes</Text>
              <TouchableOpacity onPress={addInput}>
                <Entypo name="plus" size={34} color={'#0D99FF'}/>
              </TouchableOpacity>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={participants}
              renderItem={({item, index}) => (
                <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
                  <TextInput
                    id="participants"
                    onChangeText={value => handleChangeParticipants(value, index, item)}
                    value={item}
                    keyboardType='email-address'
                    placeholder="Digite o e-mail do Participante..."
                    style={styles.input}
                  />
                  <TouchableOpacity style={{ marginLeft: 4 }} onPress={() => {handleRemoveInput(index)}}>
                    <Entypo name="trash" size={26} color={'red'}/>
                  </TouchableOpacity>
                </View>
              )}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar reunião e enviar convites</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD543",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
  },
  containerForm: {
    backgroundColor: "#faf4e0",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  containerMoreParticipants: {
    marginTop: 28,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#0D99FF",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonTextRegister: {
    color: "#a1a1a1",
  },
});

export default AddMeetings;
