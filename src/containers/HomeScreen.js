import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { createStackNavigator } from "react-navigation";
import AdsScreen from "./AdsScreen";
import AdScreen from "./AdScreen";

export default createStackNavigator({
  AdsScreen: {
    screen: AdsScreen,
    navigationOptions: {
      title: "AdsScreen"
    }
  },
  AdScreen: {
    screen: AdScreen,
    navigationOptions: {
      title: "AdScreen"
    }
  }
});
