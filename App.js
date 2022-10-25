import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import HomeRoutes from "./src/routes/HomeRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"green"} barStyle="light-content" />
      <HomeRoutes />
    </NavigationContainer>
  );
}
