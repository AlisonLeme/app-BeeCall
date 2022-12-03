import React from "react";

import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from "../pages/Welcome";
import AddMeetings from "../pages/AddMeetings";
import EditMeetings from "../pages/EditMeetings";

const Tab = createBottomTabNavigator();

const LoggedRoutes = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#faf4e0",
          borderTopColor: "transparent",
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        initialParams={route}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddMeetings"
        component={AddMeetings}
        initialParams={route}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => <Entypo name="plus" size={42} color={color} />,
        }}
      />
      <Tab.Screen
        name="EditMeetings"
        component={EditMeetings}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => <Entypo name="edit" size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedRoutes;
