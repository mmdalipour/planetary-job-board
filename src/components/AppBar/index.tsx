import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LogoWithTitle from "components/LogoWithTitle";
import Box from "@material-ui/core/Box";
import NavLink from "components/NavLink";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";

import { SPACING_LEAST } from "constants/spacing";
// translate
import { Trans } from "@lingui/macro";
// providers
import { useSettingsState } from "providers/SettingsProvider";
import { setSettingInStorage } from "lib/storage";
import LanguageSelect from "components/LanguageSelect";

// providers
// import { useSearchSetState, useSearchState } from "providers/FilterProvider";

const useStyles = makeStyles((theme: Theme) => ({}));

export type AppBarProps = {};

/**
 * @component AppBar
 */
function AppBar() {
  const classes = useStyles();

  const [settings, setSettings] = useSettingsState();

  // const setSearch = useSearchSetState();

  // const onSearchBarChange = (value: string) => {
  //   setSearch((prevState) => ({ ...prevState, term: value }));
  // };

  // const onLocationBarChange = (value: string) => {
  //   setSearch((prevState) => ({ ...prevState, location: value }));
  // };

  return (
    <MuiAppBar color="inherit" position="relative" elevation={0}>
      <Toolbar>
        <LogoWithTitle />

        <Box flex={1}></Box>
        <Tooltip title="toggle dark mode">
          <Switch
            checked={settings.type === "dark"}
            onChange={(event) => {
              const type = event.target.checked ? "dark" : "light";
              setSettings({
                ...settings,
                type,
              });

              setSettingInStorage({ ...settings, type });
            }}
          ></Switch>
        </Tooltip>

        <LanguageSelect
          languages={[
            { code: "pt", name: "Portuguese", flag: "/images/flags/pt.png" },
            { code: "en", name: "English", flag: "/images/flags/us.png" },
            { code: "fr", name: "French", flag: "/images/flags/fr.png" },
          ]}
        />
        <Trans>
          <NavLink to="/jobs">Jobs</NavLink>
        </Trans>
        <Trans>
          <NavLink to="/about-us">About Us</NavLink>
        </Trans>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
