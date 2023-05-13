import { View, Text, StyleSheet } from "react-native"
import CollectionScreen from "./CollectionScreen/CollectionScreen";
import TransactionScreen from "./TransactionScreen/TransactionScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


export default function DashboardScreen(){
    return (
      <View style={styles.rootContainer}>
      <View style={styles.navContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 15
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarIndicatorStyle: {
              backgroundColor: "#39C4F6",
              height: 45,
              borderRadius:20
            },
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
            tabBarStyle: {
              backgroundColor: "#F5B502",
              position: "absolute",
              left: "5%",
              right: "5%",
              borderRadius: 20,
              marginTop: '20%',
              height: "5%",
            },
          }}>
          <Tab.Screen name="Collection" component={CollectionScreen} />
          <Tab.Screen name="Transaction" component={TransactionScreen} />
        </Tab.Navigator>
      </View>
    </View>
      );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  navContainer: {
    flex: 1,
  },
})