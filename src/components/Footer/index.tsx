import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { SPACING_HALF, SPACING_LEAST } from "constants/spacing";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    padding: theme.spacing(SPACING_HALF),
    background: theme.palette.grey[200],
  },
}));

export type FooterProps = {};

/**
 * @component Footer
 */
function Footer({}: FooterProps) {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.wrapper}>
        <Typography align="center">Good Luck :)</Typography>
      </div>
    </footer>
  );
}

export default Footer;
