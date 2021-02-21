import { makeStyles, Theme } from "@material-ui/core/styles";

import clsx from "clsx";

// components
import Button from "@material-ui/core/Button";

import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    "&.active": {
      color: theme.palette.primary.main,
    },
  },
}));

export type NavLinkProps = {
  children: string;
} & RouterNavLinkProps;

/**
 * @component NavLink
 */
function NavLink({ children, className, ...rest }: NavLinkProps) {
  const classes = useStyles();

  const rootClasses = clsx(classes.root, className);

  return (
    <RouterNavLink className={rootClasses} {...rest}>
      <Button color="inherit">{children}</Button>
    </RouterNavLink>
  );
}

export default NavLink;
