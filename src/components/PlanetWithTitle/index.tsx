import { fade, makeStyles, Theme } from "@material-ui/core/styles";

import clsx from "clsx";

// components
import Typography from "@material-ui/core/Typography";
import { SPACING_LEAST } from "constants/spacing";
import { PlanetObject } from "constants/index";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    transition: theme.transitions.create(["opacity"]),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    position: "relative",
    "&:hover $image": {
      transform: "scale(1.1)",
    },
    opacity: 0.5,
  },
  active: {
    opacity: 1,
    "& $image": {
      transform: "scale(1.1)",
    },
    "& $name": {
      fontWeight: 900,
    },
  },

  image: {
    width: 85,
    height: 85,
    objectFit: "contain",
    objectPosition: "center",
    marginBottom: theme.spacing(SPACING_LEAST),
    transition: theme.transitions.create(["transform"]),
  },
  name: {
    fontWeight: 500,
    color: ({ color }: Pick<PlanetWithTitleProps, "color">) => color,
  },
}));

export type PlanetWithTitleProps = {
  selected?: boolean;
  onClick?: () => void;
} & PlanetObject;

/**
 * @component PlanetWithTitle
 */
function PlanetWithTitle({
  image,
  name,
  color,
  onClick,
  selected,
}: PlanetWithTitleProps) {
  const classes = useStyles({ color });

  const rootClasses = clsx(classes.root, { [classes.active]: selected });

  return (
    <div className={rootClasses} onClick={onClick}>
      <img className={classes.image} alt={`planet ${name}`} src={image} />
      <Typography className={classes.name}>{name.toUpperCase()}</Typography>
    </div>
  );
}

export default PlanetWithTitle;
