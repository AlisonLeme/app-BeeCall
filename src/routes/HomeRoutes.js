import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import LoggedRoutes from "./LoggedRoutes";

const Stack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoggedRoutes"
        component={LoggedRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
