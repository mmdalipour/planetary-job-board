import { ReactElement, ReactNode } from "react";

import { useTheme, makeStyles, Theme } from "@material-ui/core/styles";

import { useScrollTrigger } from "@material-ui/core";

// components
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import AppBar from "components/AppBar";
import FilterBar from "components/FilterBar";
import Footer from "components/Footer";
import Container from "@material-ui/core/Container";

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF } from "constants/spacing";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "hidden",
  },
  containerWrapper: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    paddingTop: theme.spacing(SPACING_HALF),
    paddingBottom: theme.spacing(SPACING_HALF),
  },
}));

export type DefaultTemplateProps = {
  children: ReactElement;
};

let container;

/**
 * @component DefaultTemplate
 * @summary DefaultTemplate default template with just footer and appbar {THIS TEMPLATE IS PROTECTED}
 * @param {boolean} loggedIn
 */
function DefaultTemplate({ children }: DefaultTemplateProps) {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      display="flex"
      flexDirection="column"
      className={classes.root}
    >
      {/* <NavigationDrawer /> */}

      <Box position="relative" top={0} left={0} zIndex={theme.zIndex.appBar}>
        <AppBar />
      </Box>
      <div
        ref={(ref) => (container = ref)}
        className={classes.containerWrapper}
      >
        <Container className={classes.container}>{children}</Container>
      </div>
      {/* <Footer /> */}
    </Box>
  );
}

export default DefaultTemplate;
