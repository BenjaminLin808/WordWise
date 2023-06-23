import { useContext } from "react";
import { Theme } from "contexts/Theme";

const useTheme = () => {
  const { theme, setTheme, colors } = useContext(Theme);
  return { theme, setTheme, colors };
};

export default useTheme;
