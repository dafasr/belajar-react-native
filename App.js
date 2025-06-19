import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./src/components/HomeScreen";
import SettingScreen from "./src/components/SettingScreen";
import Foods from "./src/components/Foods";
import Drinks from "./src/components/Drinks";

const TopTab = createMaterialTopTabNavigator();
const ButtonTab = createBottomTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Food" component={Foods} />
      <TopTab.Screen name="Drink" component={Drinks} />
    </TopTab.Navigator>
  );
};

function BottomTabNavigator() {
  return (
    <ButtonTab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
        tabBarIconStyle: { display: "none" },
      }}
    >
      <ButtonTab.Screen name="Home" component={HomeScreen} />
      <ButtonTab.Screen name="Settings" component={SettingScreen} />
      <ButtonTab.Screen name="Product" component={TopTabNavigator} />
    </ButtonTab.Navigator>
  );
}

const App = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

export default App;
