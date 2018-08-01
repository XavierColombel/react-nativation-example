import { createStackNavigator } from "react-navigation";

import SplashScreen from "./src/containers/SplashScreen";
import TabScreen from "./src/containers/TabScreen";

export default createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    TabScreen: {
      screen: TabScreen
    }
  },
  {
    headerMode: "none",
    mode: "modal",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
