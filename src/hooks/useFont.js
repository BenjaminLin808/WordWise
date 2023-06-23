import { useContext } from "react";
import { Font } from "contexts/Font";

const useFont = () => {
  const { font, setFont } = useContext(Font);
  return { font, setFont };
};

export default useFont;
