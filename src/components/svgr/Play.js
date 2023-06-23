import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const Play = ({ color1, color2, isHovered, ...rest }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 75 75"
    {...rest}
  >
    {/* || "#A445ED" */}
    <G fillRule="nonzero">
      <Circle
        cx={37.5}
        cy={37.5}
        r={37.5}
        fill={color1 || "#8F19E8"}
        opacity={isHovered ? 1 : 0.25}
      />
      <Path d="M29 27v21l21-10.5z" fill={color2 || "#8F19E8"} />
    </G>
  </Svg>
);
export default Play;
