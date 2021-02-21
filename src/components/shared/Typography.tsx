import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import {
  FontWeightProperty,
  LetterSpacingProperty,
} from "@material-ui/styles/node_modules/csstype";

// components
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
  TypographyTypeMap,
} from "@material-ui/core/Typography";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const TypographyColor = [
  "inherit",
  "initial",
  "primary",
  "secondary",
  "textPrimary",
  "textSecondary",
  "error",
];

const useStyles = makeStyles<Theme, TypographyProps<any>>((theme: Theme) => ({
  root: ({ fontWeight, letterSpacing, color }) => {
    const innerColor = { color: color as string };
    return {
      fontWeight,
      letterSpacing,
      ...(!TypographyColor.includes(color as string) && innerColor),
    };
  },
}));

export type TypographyProps<TLength> = {
  fontWeight?: FontWeightProperty;
  letterSpacing?: LetterSpacingProperty<TLength>;
  color?: typeof TypographyColor | string;
  component?: React.ElementType<any>;
} & Omit<MuiTypographyProps, "color">;

/**
 * @component Typography
 */
function Typography<TLength>({
  fontWeight,
  letterSpacing,
  className,
  component,
  color,
  ...rest
}: TypographyProps<TLength>) {
  const classes = useStyles({ fontWeight, letterSpacing, color, component });

  const rootClasses = clsx(className, classes.root);

  return (
    <MuiTypography
      component={component as any}
      color={
        TypographyColor.includes(color as string) ? (color as any) : "inherit"
      }
      className={rootClasses}
      {...rest}
    />
  );
}

export default Typography;
