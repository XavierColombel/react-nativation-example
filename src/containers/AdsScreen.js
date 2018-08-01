import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class Ads extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My ads screen !</Text>
        <Button
          onPress={() => this.props.navigation.navigate("AdScreen")}
          title="Go to ad screen"
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

export default Ads;
