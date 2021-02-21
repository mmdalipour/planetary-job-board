import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

// constants
import { SPACING_LEAST } from "constants/spacing";
import { Link } from "react-router-dom";
// translate
import { t } from "@lingui/macro";

const useStyles = makeStyles((theme: Theme) => ({
  logoImage: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  root: {
    textDecoration: "none",
  },
}));

export type LogoWithTitleProps = {};

/**
 * @component LogoWithTitle
 */
function LogoWithTitle({}: LogoWithTitleProps) {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.root}>
      <Box display="flex" alignItems="center">
        <img
          className={classes.logoImage}
          width="45px"
          src="/logo.png"
          alt="logo"
        />
        <Hidden smDown implementation="css">
          <ListItemText
            primaryTypographyProps={{
              color: "primary",
            }}
            primary="Planetary"
            secondary={t`Find your favorite remote job`}
          />
        </Hidden>
      </Box>
    </Link>
  );
}

export default LogoWithTitle;
