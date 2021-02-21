import { makeStyles, Theme } from "@material-ui/core/styles";
import { Fragment, useEffect } from "react";

import { ThemeProvider } from "@material-ui/core/styles";

// components
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// providers
import { useSettingsState } from "providers/SettingsProvider";

// lib
import { getSettingsInStorage } from "lib/storage";

// themes
import theme from "themes/default";

import { i18n } from "@lingui/core";

const useStyles = makeStyles((theme: Theme) => ({}));

export type ThemedAppProps = {};

/**
 * @component ThemedApp
 */
function ThemedApp({}: ThemedAppProps) {
  const classes = useStyles();

  const [settings, setSettings] = useSettingsState();

  useEffect(() => {
    const localSettings = getSettingsInStorage();

    // check if localSettings exists and also we need to check for diffrence with global setting state value
    if (localSettings) {
      // if we found any settings we apply settings
      setSettings({ ...settings, ...localSettings });
      i18n.activate(localSettings.lang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme(settings.type)}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
      {/* <button
            onClick={() => {
              i18n.activate("en");
            }}
          >
            en
          </button>
          <button
            onClick={() => {
              i18n.activate("fr");
            }}
          >
            french
          </button>
          <button
            onClick={() => {
              i18n.activate("pt");
            }}
          >
            Portuguese
          </button> */}
    </ThemeProvider>
  );
}

export default ThemedApp;
