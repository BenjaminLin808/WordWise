import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={38}
    viewBox="0 0 34 38"
    {...props}
  >
    <G
      fill="none"
      fillRule="evenodd"
      stroke="#838383"
      strokeLinecap="round"
      strokeWidth={1.5}
    >
      <Path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
      <Path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
      <Path d="M11 9h12" />
    </G>
  </Svg>
);
export default Logo;
