import {
  fade,
  lighten,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";

import createTypography from "./typography";
import createPalette from "./palette";
import shadows from "./shadows";
import breakpoints from "./breakpoints";

declare module "@material-ui/core/styles/withStyles" {
  // Augment the BaseCSSProperties so that we can control jss-rtl
  interface BaseCSSProperties {
    /**
     * Used to control if the rule-set should be affected by rtl transformation
     */
    flip?: boolean;
  }
}

export type ThemeType = "light" | "dark";
export type Direction = "rtl" | "ltr";

const theme = (type: ThemeType = "dark") => {
  const palette = createPalette(type);
  const typography = createTypography(palette);
  return createMuiTheme({
    palette,
    typography,
    breakpoints,
    shadows,
    shape: {
      borderRadius: 32,
    },
    overrides: {
      MuiButton: {
        contained: {
          boxShadow: `0 5px 15px ${fade(palette.primary.main, 0.35)}`,
        },
      },

      MuiCssBaseline: {
        "@global": {
          a: {
            textDecoration: "none",
            color: palette.text.primary,
          },
          "::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: palette.background.paper,
          },
          "::-webkit-scrollbar-thumb": {
            background: fade(palette.primary.main, 0.1),
            borderRadius: 8,
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: fade(palette.primary.main, 0.5),
          },
          "::-webkit-scrollbar-corner": {
            background: lighten(palette.background.paper, 0.2),
          },
        },
      },
    },
  });
};

export default theme;
