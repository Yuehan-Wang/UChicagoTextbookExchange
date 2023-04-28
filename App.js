import React, { useState } from "react";
import Dashboard from "./src/test/Dashboard";
import LoginScreen from "./src/test/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import SigninScreen from "./screens/AuthScreen/SigninScreen/SigninScreen";
import SignupScreen from "./screens/AuthScreen/SignupScreen/SignupScreen";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import MarketScreen from "./screens/MarketScreen/MarketScreen";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

//to receive if logined in/signed up data, placeholder for now
const auth = 0;

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedTab() {
  //const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarLabelStyle: {
          display: "flex",
          color: "grey",
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="calendar"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="explore"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Entypo
              name="chat"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="user"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  //const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!auth && <AuthStack />}
      {auth && <AuthenticatedTab />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}

