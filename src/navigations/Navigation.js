import { useEffect } from "react";
import HomeScreen from "screens/HomeScreen";
import ThemeScreen from "screens/ThemeScreen";
import FontScreen from "screens/FontScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const Navigation = () => {
  const [fontsLoaded] = useFonts({
    "Sans-Serif": require("../../assets/fonts/inter/static/Inter-Regular.ttf"),
    "Sans-Serif-Bold": require("../../assets/fonts/inter/static/Inter-Bold.ttf"),
    Serif: require("../../assets/fonts/lora/static/Lora-Regular.ttf"),
    "Serif-Bold": require("../../assets/fonts/lora/static/Lora-Bold.ttf"),
    Mono: require("../../assets/fonts/inconsolata/static/Inconsolata-Regular.ttf"),
    "Mono-Bold": require("../../assets/fonts/inconsolata/static/Inconsolata-Bold.ttf"),
  });

  useEffect(() => {
    const temp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    temp();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: null, headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
        <Stack.Screen name="FontScreen" component={FontScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
