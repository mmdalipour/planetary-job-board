import { useState, useEffect, MouseEvent } from "react";
import { useTheme, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

// components
import MenuItem from "@material-ui/core/MenuItem";
import ButtonBase from "@material-ui/core/ButtonBase";
import Menu from "@material-ui/core/Menu";
import Typography from "components/shared/Typography";
import Checkbox from "components/shared/Checkbox";

// icons
import DownArrow from "@material-ui/icons/ChevronRight";

// constants
import { SPACING, SPACING_LEAST } from "constants/spacing";

const WIDTH = 250;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: WIDTH,
    overflow: "hidden",
  },
  select: {
    display: "flex",
    alignItems: "center",
    width: 320,
    justifyContent: "space-between",
  },
  baseButton: {
    width: "100%",
    padding: theme.spacing(SPACING_LEAST),
  },
  name: {
    width: "100%",
  },
  arrowButton: {
    transition: theme.transitions.create(["transform"]),
    transform: "rotate(90deg)",
  },
  arrowDown: {
    transform: "rotate(270deg)",
  },
  selectButton: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(SPACING_LEAST),
  },
  selectButtonWrapper: {
    display: "flex",
    alignItems: "center",
  },
  menuRoot: {
    // marginTop: theme.spacing(SPACING),
  },
  menuContainer: {
    maxHeight: 200,
    outline: "none",
    overflow: "auto",
  },
}));

export type OptionID = string | number;

export type Option = {
  _id: OptionID;
  label: string;
};

export type SelectProps = {
  label?: string;
  options: Option[];
} & (
  | {
      onChange?: (value: Option) => void;
      selected?: OptionID;
      multiSelect?: false;
    }
  | {
      onChange?: (value: Option[]) => void;
      selected?: OptionID[];
      multiSelect: true;
    }
);

/**
 * @component Select
 * @summary shared Select
 */
function Select({
  label,
  options,
  onChange = () => {},
  multiSelect = false,
  selected,
}: SelectProps) {
  const theme = useTheme();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [_selected, setSelected] = useState<OptionID | OptionID[]>(
    multiSelect ? [] : options[0]._id
  );

  const upArrowClasses = clsx(
    classes.arrowButton,
    Boolean(anchorEl) && classes.arrowDown
  );

  const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const getOptions = (id: OptionID | OptionID[]) =>
    multiSelect
      ? (id as OptionID[]).map((itemId) =>
          options.find((_) => _._id === itemId)
        )
      : options.find((_) => _._id === (id as OptionID));

  const onMenuItemClick = (item: Option) => {
    if (multiSelect) {
      const itemIndex = (_selected as OptionID[])?.findIndex(
        (selectedItem: OptionID) => selectedItem === item._id
      );

      if (itemIndex > -1) {
        setSelected((prevState) => {
          const newState = [...(prevState as OptionID[])];
          newState.splice(itemIndex, 1);
          onChange(getOptions(newState) as any);
          return newState;
        });
      } else {
        setSelected((prevState) => {
          const newState = [...(prevState as OptionID[]), item._id];
          onChange(getOptions(newState) as any);
          return newState;
        });
      }
    } else {
      setSelected(item._id);
      onChange(getOptions(item._id) as any);
    }
  };

  const isSelected = (id: OptionID): boolean =>
    multiSelect && Array.isArray(_selected)
      ? (_selected as OptionID[]).includes(id)
      : _selected === id;

  useEffect(() => {
    if (selected) {
      setSelected(selected);
    }
  }, [selected]);

  return (
    <div>
      <div></div>
      <ButtonBase onClick={onButtonClick} className={classes.selectButton}>
        <div className={classes.selectButtonWrapper}>
          <Typography noWrap variant="button" letterSpacing={SPACING}>
            {label}
          </Typography>
          <DownArrow className={upArrowClasses} />
        </div>
      </ButtonBase>
      <Menu
        className={classes.menuRoot}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <div className={classes.menuContainer}>
          {options.map((item) => {
            return (
              <MenuItem onClick={() => onMenuItemClick(item)} key={item._id}>
                <Checkbox size="small" checked={isSelected(item._id)} />
                <Typography
                  noWrap
                  variant="caption"
                  letterSpacing={SPACING}
                  fontWeight={500}
                >
                  {item.label}
                </Typography>
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </div>
  );
}

export default Select;
