import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";

import NavButtons from "./NavButtons";
import SearchInput from "./SearchInput";
import Card from "./Card";
import NotFound from "./NotFound";

import Main from "layouts/Main";

import useTheme from "hooks/useTheme";

const HomeScreen = () => {
  const [word, setWord] = useState("keyboard");
  const [wordDetails, setWordDetails] = useState();
  const { colors } = useTheme();
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setLoading(true);

    try {
      if (!word) {
        setIsEmpty(true);
        return;
      }
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const wordDetails = response.data;
      setWordDetails(wordDetails);
    } catch (error) {
      setWordDetails(null);
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Main>
      <View
        testID="homescreen"
        style={{ ...styles.container, backgroundColor: colors.primary }}
      >
        <NavButtons />
        <SearchInput
          setWord={setWord}
          word={word}
          handleSearch={handleSearch}
          isEmpty={isEmpty}
          setIsEmpty={setIsEmpty}
        />
        {wordDetails ? (
          <Card wordDetails={wordDetails} />
        ) : (
          <NotFound loading={loading} error={error} />
        )}
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

export default HomeScreen;
