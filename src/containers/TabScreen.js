import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="home" size={30} color={tintColor} />;
        }
      },
      tabBarOptions: {
        activeTintColor: "blue",
        inactiveTintColor: "gray"
      }
    },
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
