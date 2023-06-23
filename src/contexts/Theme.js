import { createContext, useState, useEffect } from "react";
import Colors from "constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Theme = createContext({
  theme: "light",
  setTheme: () => {},
  colors: Colors.light,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const colors = Colors[theme];

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@theme").then(
          (storedTheme) => {
            if (storedTheme) {
              setTheme(storedTheme);
            }
          }
        );
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem("@theme", theme);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();
  }, [theme]);

  return (
    <Theme.Provider value={{ theme, setTheme, colors }}>
      {children}
    </Theme.Provider>
  );
};

export default Theme;
export { Theme, ThemeProvider };
