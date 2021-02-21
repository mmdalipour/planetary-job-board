import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// templates
import DefaultTemplate from "template/DefaultTemplate";
import { SPACING } from "constants/spacing";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  heroImage: {
    userSelect: "none",
    display: "none",
    position: "absolute",
    userDrag: "none",
    bottom: 0,
    right: 0,
    [theme.breakpoints.up("lg")]: {
      width: "850px",
      display: "block",
    },
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  heroContent: {
    zIndex: theme.zIndex.appBar,
    position: "absolute",
    top: "50%",

    height: "auto",
    transform: "translateY(-50%)",
  },
  title: {
    fontWeight: 700,
    fontSize: 45,
    lineHeight: 1.2,
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
      lineHeight: 1.2,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      lineHeight: 1.2,
    },
  },
  siteDescription: {
    marginBottom: theme.spacing(SPACING),
  },
}));

export type HomeProps = {};

/**
 * @component Home
 */
function Home({}: HomeProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.heroImage}
        src="/assets/svg/landing_art.svg"
        alt="landing art"
      />
      <div className={classes.contentWrapper}>
        <Box
          width={{ xs: "100%", sm: "100%", md: "65%", lg: "50%" }}
          height="100%"
          className={classes.heroContent}
        >
          <Typography gutterBottom className={classes.title} variant="h2">
            <Trans>WELCOME TO</Trans> <br />
            <Typography
              className={classes.title}
              variant="h2"
              component="span"
              color="primary"
            >
              <Trans>PLANETARY</Trans>
            </Typography>{" "}
            <Trans>JOB BOARD</Trans>
          </Typography>

          <Typography className={classes.siteDescription} gutterBottom>
            <Trans>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Trans>
          </Typography>
          <Link to="/jobs">
            <Button size="large" color="primary" variant="contained">
              <Trans>Find a Job</Trans>
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}

export default Home;
