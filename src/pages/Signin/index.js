import React from "react";
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

const Signin = ({ navigation }) => {
  const handleLogin = (credentials) => {
    const uri = "https://api-kox9zsndz-alisonleme.vercel.app";
    axios
      .post(`${uri}/api/auth/signin`, credentials)
      .then((res) => {
        const result = res.data;
        navigation.navigate("LoggedRoutes", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput
              id="email"
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Digite um e-mail..."
              style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
              id="password"
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Sua senha"
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.buttonTextRegister}>
                N??o possui uma conta? Cadastre-se
              </Text>
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
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
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

export default Signin;
