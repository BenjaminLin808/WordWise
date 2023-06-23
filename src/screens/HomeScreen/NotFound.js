import { Text, TextBold } from "components/style/Text";
import { View, StyleSheet } from "react-native";
import useTheme from "hooks/useTheme";

const NotFound = ({ loading, error }) => {
  const { colors } = useTheme();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>🔍</Text>
        <TextBold style={{ fontSize: 15, color: colors.textColor }}>
          Searching...
        </TextBold>
        <Text style={{ textAlign: "center", color: colors.textFade }}>
          Please wait while we are searching for the word you are looking for.
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>😕</Text>
        <TextBold style={{ fontSize: 15, color: colors.textColor }}>
          No Definitions Found
        </TextBold>
        <Text style={{ textAlign: "center", color: colors.textFade }}>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
});
export default NotFound;
