import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { t } from "@lingui/macro";
import { Trans } from "@lingui/macro";
const useStyles = makeStyles((theme: Theme) => ({}));

export type AboutUsProps = {};

/**
 * @component AboutUs
 */
function AboutUs({}: AboutUsProps) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="600px">
        <Typography align="center" variant="h4" gutterBottom>
          <Trans>About Us</Trans>
        </Typography>
        <Typography align="center">
          <Trans>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Trans>
        </Typography>

        <Box display="flex" width="100%" justifyContent="center">
          <IconButton color="primary">
            <GitHubIcon />
          </IconButton>
          <IconButton color="primary">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
