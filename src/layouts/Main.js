import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import useTheme from "hooks/useTheme";

const Main = ({ children }) => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{ ...styles.container, backgroundColor: colors.primary }}
      >
        <ScrollView keyboardShouldPersistTaps="handled">{children}</ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Main;
