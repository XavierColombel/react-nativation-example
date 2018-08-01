import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name="cogs" size={30} color={tintColor} />;
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SettingsScreen;
