import { makeStyles } from "@material-ui/core/styles";

// constants
import { SPACING, SPACING_LEAST } from "constants/spacing";

// components
import Input, { InputProps } from "components/shared/Input";

// icons
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  icon: {
    opacity: 0.5,
    marginRight: theme.spacing(SPACING_LEAST),
  },
}));

export type SearchBarProps = {} & InputProps;

/**
 * @component SearchBar
 * @summary autocomplete search bar
 */
function SearchBar({ ...rest }: SearchBarProps) {
  const classes = useStyles();
  return (
    <Input
      rounded
      {...rest}
      startAdornment={<SearchIcon color="primary" className={classes.icon} />}
    />
  );
}

export default SearchBar;
