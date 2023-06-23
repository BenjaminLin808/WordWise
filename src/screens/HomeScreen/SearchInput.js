import { Pressable } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text } from "components/style/Text";

import Search from "components/svgr/Search";
import useTheme from "hooks/useTheme";

const SearchInput = ({ setWord, word, handleSearch, setIsEmpty, isEmpty }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    setIsEmpty(false);
  };
  const handleBlur = () => setIsFocused(false);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.input,
          isFocused ? styles.focusedInput : "",
          isEmpty ? styles.emptyInput : "",
          { backgroundColor: colors.textSearch },
        ]}
      >
        <TextInput
          placeholder="Search"
          value={word}
          placeholderTextColor={colors.textColor}
          style={[{ color: colors.textColor }]}
          onChangeText={(text) => setWord(text)}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
        />
        <Pressable onPress={handleSearch}>
          <Search />
        </Pressable>
      </View>
      {isEmpty ? (
        <Text style={{ color: "#FF5252" }}>Woops, can't be empty...</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "90%",
    marginTop: 30,
  },
  input: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  focusedInput: {
    borderColor: "#8F19E8",
    borderWidth: 1,
  },
  emptyInput: {
    borderColor: "#FF5252",
    borderWidth: 1,
  },
  searchIcon: {
    width: 20,
  },
});

export default SearchInput;
