import { ThemeProvider } from "./contexts/Theme";
import { FontProvider } from "./contexts/Font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "navigations/Navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <FontProvider>
          <Navigation />
        </FontProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
