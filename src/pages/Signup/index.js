import React, { useState } from "react";
import { Formik } from "formik";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";

import axios from "axios";

const Signup = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastrar usuário</Text>
      </Animatable.View>
      <Formik
        initialValues={{ name: "", email: "", password: ""}}
        onSubmit={(values, { resetForm }) => {

          const uri = "https://api-kox9zsndz-alisonleme.vercel.app";

          axios.post(`${uri}/api/users`, values)
          .then((res) => {
            navigation.navigate("Signin")
          })
          .catch(console.log)
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.name}>Nome</Text>
            <TextInput
              id="name"
              onChangeText={handleChange("name")}
              value={values.name}
              placeholder="Digite o seu nome"
              style={styles.input}
            />

            <Text style={styles.title}>E-mail</Text>
            <TextInput
              id="email"
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Digite o seu e-mail"
              style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
              id="password"
              onChangeText={handleChange("password")}
              value={values.password}
              keyboardType="visible-password"
              placeholder="Digite a sua senha"
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      </Formik>
    </View>
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

export default Signup;
