import muiCreatePalette from "@material-ui/core/styles/createPalette";
import { ThemeType } from "./";

const createColor = (type: ThemeType, lightColor: string, darkColor: string) =>
  type === "light" ? lightColor : darkColor;

const createPalette = (type: ThemeType) =>
  muiCreatePalette({
    type,
    primary: {
      main: "#D04873",
    },
    text: {
      primary: createColor(type, "#080A15", "#F7F9FC"),
      secondary: "#A9A9AD",
    },
    background: {
      default: createColor(type, "#F7F9FC", "#121212"),
      paper: createColor(type, "#FFF", "#212121"),
    },
  });

export default createPalette;
