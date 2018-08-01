import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("TabScreen")}
          title="Go to home"
        />
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

export default SplashScreen;
