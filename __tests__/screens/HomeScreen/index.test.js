import { render, waitFor } from "@testing-library/react-native";
import HomeScreen from "screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

// test if the home screen has the right background color
test("home page has the right background color", async () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
  await waitFor(
    () => {
      const homescreen = getByTestId("homescreen");
      const style = homescreen.props.style;
      console.log(style);
      let styleObj = {};
      if (!Array.isArray(style)) {
        styleObj = style;
      } else {
        styleObj = style.reduce((acc, curr) => {
          return { ...acc, ...curr };
        }, {});
      }
      expect(styleObj.backgroundColor).toBe("#E9E9E9");
    },
    { timeout: 5000 }
  );
});
