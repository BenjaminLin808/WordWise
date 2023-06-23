import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Font = createContext({
  font: "Sans-Serif",
  setFont: () => {},
});

const FontProvider = ({ children }) => {
  const [font, setFont] = useState("Sans-Serif");

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@font").then((storedFont) => {
          if (storedFont) {
            setFont(storedFont);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem("@font", font);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();
  }, [font]);

  return <Font.Provider value={{ font, setFont }}>{children}</Font.Provider>;
};

export default Font;
export { Font, FontProvider };
