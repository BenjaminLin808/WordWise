import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import NavButtons from "./NavButtons";
import Main from "layouts/Main";

import useTheme from "hooks/useTheme";

const ThemeScreen = () => {
  const { colors } = useTheme();

  return (
    <Main>
      <View style={{ ...styles.container, backgroundColor: colors.primary }}>
        <NavButtons />
      </View>
    </Main>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fcff",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  definition: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default ThemeScreen;
