import { render, fireEvent } from "@testing-library/react-native";
import NavButtons from "./../../../src/screens/ThemeScreen/NavButtons";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Mock the navigation object
const mockNavigation = {
  navigate: jest.fn(),
};

// test if the radio buttons work correctly
test("testing radio buttons", () => {
  const { getByText } = render(
    <NavigationContainer>
      <NavButtons />
    </NavigationContainer>
  );

  const fontButton1 = getByText("light");
  fireEvent.press(fontButton1);
  expect(fontButton1).toBeDefined();
});
