import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import React, { useState } from "react";
import Dashboard from "./src/test/Dashboard";
import LoginScreen from "./src/test/LoginScreen";

import DashboardScreen from "./src/screens/DashboardScreen/DashboardScreen"
import MarketScreen from "./src/screens/MarketScreen/MarketScreen"
import ChatScreen from "./src/screens/ChatScreen/ChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen"

import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

// //to receive if logined in/signed up data, placeholder for now
// // const auth = 0;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthenticatedTab() {

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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <NavigationContainer>
        <AuthenticatedTab />
  </NavigationContainer>
  ) : (
    <LoginScreen onLogin={handleLogin} />
  );
}

export default App;