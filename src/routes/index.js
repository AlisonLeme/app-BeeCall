import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Signin from "../pages/Signin";

const Stack = createNativeStackNavigator();

const Routes = () => {
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
    </Stack.Navigator>
  );
};

export default Routes;
