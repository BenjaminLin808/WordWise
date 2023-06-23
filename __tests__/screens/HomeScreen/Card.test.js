import { render, waitFor } from "@testing-library/react-native";
import HomeScreen from "screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

// test if the card has the right text color
test("card has the right background color", async () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
  await waitFor(
    () => {
      const text1 = getByTestId("text1");
      const style = text1.props.style;
      let styleObj = {};
      if (!Array.isArray(style)) {
        styleObj = style;
      } else {
        styleObj = style.reduce((acc, curr) => {
          return { ...acc, ...curr };
        }, {});
      }
      expect(styleObj.color).toBe("#2D2D2D");
    },
    { timeout: 5000 }
  );

  await waitFor(
    () => {
      const text2 = getByTestId("text2");
      const style = text2.props.style;
      let styleObj = {};
      if (!Array.isArray(style)) {
        styleObj = style;
      } else {
        styleObj = style.reduce((acc, curr) => {
          return { ...acc, ...curr };
        }, {});
      }
      expect(styleObj.color).toBe("#8F19E8");
    },
    { timeout: 5000 }
  );
});
