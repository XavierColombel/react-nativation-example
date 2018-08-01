import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Ad extends Component {
  static navigationOptions = {
    title: "toutou"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>My ad screen !</Text>
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

export default Ad;
