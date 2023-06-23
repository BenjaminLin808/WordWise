import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import Logo from "../../components/svgr/Logo";
import ArrowDown from "components/svgr/ArrowDown";
import Moon from "components/svgr/Moon";
import useTheme from "hooks/useTheme";
import useFont from "hooks/useFont";
import { useNavigation } from "@react-navigation/native";

const NavButtons = () => {
  const navigation = useNavigation();
  const { theme, setTheme, colors } = useTheme();
  const { font } = useFont();

  const handleTheme = (curTheme) => {
    if (curTheme !== theme) setTheme(curTheme);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Logo style={styles.logo} />
        </Pressable>
        <View style={styles.font}>
          <Pressable onPress={() => navigation.navigate("FontScreen")}>
            <Text style={{ color: colors.textColor }}>{font}</Text>
          </Pressable>
          <ArrowDown />
          <Text>|</Text>
          <Moon color={colors.borderColor} />
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => handleTheme("dark")}>
        <View
          style={[
            styles.radio,
            theme === "dark"
              ? {
                  backgroundColor: colors.forePurple,
                  borderColor: colors.textColor,
                }
              : { borderColor: colors.textColor },
          ]}
        ></View>
        <Text style={{ fontSize: 25, color: colors.textColor }}>dark</Text>
      </Pressable>
      <View
        style={{ ...styles.line, backgroundColor: colors.textColor }}
      ></View>
      <Pressable style={styles.button} onPress={() => handleTheme("light")}>
        <View
          style={[
            styles.radio,
            theme === "light"
              ? {
                  backgroundColor: colors.forePurple,
                  borderColor: colors.textColor,
                }
              : { borderColor: colors.textColor },
          ]}
        ></View>
        <Text style={{ fontSize: 25, color: colors.textColor }}>light</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    width: "90%",
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  line: {
    height: 2,
    width: "100%",
    marginVertical: 20,
  },
});

export default NavButtons;
