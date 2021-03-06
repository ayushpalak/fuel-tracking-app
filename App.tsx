import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./redux-toolkit-store/redux-toolkit-store";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PaperProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PaperProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
