import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";
import useTheme from "hooks/useTheme";
import Play from "components/svgr/Play";
import NewWindow from "components/svgr/NewWindow";
import { Text, TextBold } from "components/style/Text";
import { useState } from "react";
import { Audio } from "expo-av";

const Card = ({ wordDetails }) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handlePress = () => {
    if (wordDetails[0].sourceUrls[0]) {
      // Open the URL in a browser
      Linking.openURL(wordDetails[0].sourceUrls[0]);
    } else {
      alert("No URL provided");
    }
  };

  const playAudio = async () => {
    const audioUrl = wordDetails[0].phonetics.filter(
      (item) => item.audio !== ""
    )[0].audio;

    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({ uri: audioUrl });
      await soundObject.playAsync();
    } catch (error) {
      console.log("Error playing audio:", error);
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TextBold
            testID="text1"
            style={{ ...styles.word, color: colors.textColor }}
          >
            {wordDetails[0].word}
          </TextBold>
          <Text
            testID="text2"
            style={{ ...styles.phonetic, color: colors.forePurple }}
          >
            {wordDetails[0].phonetic}
          </Text>
        </View>
        <Pressable
          onPressIn={handleHoverIn}
          onPressOut={handleHoverOut}
          onPress={playAudio}
        >
          <Play
            color1={isHovered ? colors.forePurple : colors.backPurple}
            color2={isHovered ? "white" : colors.forePurple}
            isHovered={isHovered}
          />
        </Pressable>
      </View>

      {wordDetails[0].meanings.map((item, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text style={{ ...styles.partOfSpeech, color: colors.textColor }}>
              {item.partOfSpeech}
            </Text>
            <View
              style={{
                ...styles.horizontalLine,
                backgroundColor: colors.textFade,
              }}
            />
          </View>
          <Text style={{ ...styles.subTitle, color: colors.textFade }}>
            Meaning
          </Text>
          {item.definitions.map((subitem, index) => (
            <View key={index}>
              <View style={styles.meanings}>
                <Text style={{ ...styles.bullet, color: colors.forePurple }}>
                  {"\u2B24"}
                </Text>
                <View style={styles.definition}>
                  <Text
                    style={{ ...styles.definition, color: colors.textColor }}
                  >
                    {subitem.definition}
                  </Text>
                </View>
              </View>
            </View>
          ))}
          {item.synonyms.length > 0 && (
            <View style={styles.synonyms}>
              <Text style={{ color: colors.textFade }}>Synonyms</Text>
              <Text style={{ color: colors.backPurple }}>{item.synonyms}</Text>
            </View>
          )}
        </View>
      ))}
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <View
          style={{
            ...styles.horizontalLine,
            backgroundColor: colors.textFade,
          }}
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.sourceUrls}>
          <View>
            <Text style={styles.text}>Source</Text>
          </View>
          <Text>{"  "}</Text>
          <Text style={styles.text}>{wordDetails[0].sourceUrls[0]}</Text>
          <Text>{"  "}</Text>
          <NewWindow />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginTop: 30,
  },
  word: {
    fontSize: 30,
  },
  phonetic: {
    fontSize: 15,
  },
  partOfSpeech: {
    fontSize: 15,
    marginRight: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    alignSelf: "center",
  },
  subTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  meanings: {
    fontSize: 15,
    flexDirection: "row",
  },
  definition: {
    marginTop: 5,
    fontSize: 15,
    marginRight: 20,
  },
  bullet: {
    marginLeft: 20,
    marginRight: 15,
    marginTop: 16,
    fontSize: 5,
  },
  synonyms: {
    flexDirection: "row",
    gap: 15,
    marginTop: 50,
    fontSize: 15,
  },
  sourceUrls: {
    marginTop: 20,
    flexDirection: "row",
  },
  text: {
    textDecorationLine: "underline",
    textDecorationColor: "gray",
    textDecorationStyle: "solid",
  },
});

export default Card;
