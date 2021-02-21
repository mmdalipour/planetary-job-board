import { useMemo, useState } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";

import { i18n } from "@lingui/core";

import {
  useSettingsState,
  Settings,
  Language,
} from "providers/SettingsProvider";

import { setSettingInStorage } from "lib/storage";

// components
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) => ({
  button: {},
  image: {
    borderRadius: "50%",
    width: 24,
    height: 24,
    objectFit: "cover",
  },
  menu: {
    borderRadius: theme.shape.borderRadius / 2,
  },
}));

type LanguageItem = { code: Language; flag: string; name: string };
export type LanguageSelectProps = {
  languages: LanguageItem[];
};

/**
 * @component LanguageSelect
 */
function LanguageSelect({ languages }: LanguageSelectProps) {
  const classes = useStyles();

  const [settings, setSettings] = useSettingsState();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const findByCode = (code: Language) => {
    return languages.find((_) => _.code === code);
  };

  const selectedLanguage = useMemo(() => {
    return findByCode(settings.lang);
  }, [settings]);

  return (
    <div>
      <IconButton onClick={handleClick}>
        <img
          src={selectedLanguage?.flag}
          alt={`${selectedLanguage?.code} language`}
          className={classes.image}
        />
      </IconButton>
      <Menu
        classes={{ paper: classes.menu }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((lang) => {
          return (
            <MenuItem
              key={lang.code}
              onClick={() => {
                const newSettings: Settings = { ...settings, lang: lang.code };
                setSettings(newSettings);
                setSettingInStorage(newSettings);

                i18n.activate(lang.code);

                handleClose();
              }}
            >
              {lang.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default LanguageSelect;
