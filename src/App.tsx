// components
import Compose, { ComposeComponent } from "components/Compose";
import ThemedApp from "./ThemedApp";

// providers
import { FilterProvider } from "providers/FilterProvider";
import { SettingsProvider } from "providers/SettingsProvider";

// initial providers (only non dynamic providers)
const providers: ComposeComponent[] = [FilterProvider, SettingsProvider];

function App() {
  return (
    <Compose components={providers}>
      <ThemedApp />
    </Compose>
  );
}

export default App;
