import { Text as DefaultText } from "react-native";
import useFont from "hooks/useFont";
import useTheme from "hooks/useTheme";

const Text = ({ style, ...rest }) => {
  const { font } = useFont();
  const { colors } = useTheme();

  return (
    <DefaultText
      {...rest}
      style={[{ fontFamily: font, color: colors.textColor }, style]}
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  const { font } = useFont();
  const { colors } = useTheme();

  return (
    <DefaultText
      {...rest}
      style={[{ fontFamily: `${font}-Bold`, color: colors.textColor }, style]}
    />
  );
};

export { Text, TextBold };
export default Text;
