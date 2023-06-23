import { View, StyleSheet, Pressable, Switch } from "react-native";
import Logo from "../../components/svgr/Logo";
import ArrowDown from "components/svgr/ArrowDown";
import Moon from "components/svgr/Moon";
import useTheme from "hooks/useTheme";
import useFont from "hooks/useFont";
import { useNavigation } from "@react-navigation/native";
import { Text, TextBold } from "components/style/Text";

const NavButtons = () => {
  const navigation = useNavigation();
  const { theme, setTheme, colors } = useTheme();
  const { font } = useFont();

  const isDark = theme === "dark" ? true : false;

  const toggleSwitch = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.font}>
        <Pressable onPress={() => navigation.navigate("FontScreen")}>
          <TextBold style={{ color: colors.textColor }}>{font}</TextBold>
        </Pressable>
        <ArrowDown />
        <View
          style={{
            ...styles.verticalLine,
            borderColor: isDark ? "#FFFFFF" : "black",
          }}
        ></View>
        <View style={styles.switch}>
          <Switch
            trackColor={{ true: colors.forePurple, false: colors.textFade }}
            thumbColor={"white"}
            onValueChange={toggleSwitch}
            value={isDark}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("ThemeScreen")}>
          <Moon color={colors.borderColor} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {},
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    width: "90%",
    justifyContent: "space-between",
  },
  logo: {
    alignSelf: "flex-start",
  },
  font: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  dropdown: {
    width: 150,
    height: 40,
    paddingRight: 20,
  },
  verticalLine: {
    height: 25,
    borderWidth: 0.25,
  },
});

export default NavButtons;
