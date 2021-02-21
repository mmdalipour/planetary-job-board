import { makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

import clsx from "clsx";

// components
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";

// constants
import { SPACING_LEAST } from "constants/spacing";

const useStyles = makeStyles((theme: Theme) => ({
  root: ({ size }: Pick<CheckboxProps, "size">) => ({
    padding: theme.spacing(size === "medium" ? SPACING_LEAST : 0),
    borderRadius: "50%",
    margin: theme.spacing(SPACING_LEAST),
  }),
  checkbox: ({ size }: Pick<CheckboxProps, "size">) => ({
    width: size === "medium" ? 16 : 12,
    height: size === "medium" ? 16 : 12,
    borderRadius: "50%",
    border: `2px solid ${theme.palette.text.primary}`,
  }),
  checkboxChecked: {
    border: `2px solid ${theme.palette.primary.main}!important`,
    background: theme.palette.primary.main,
  },
}));

export type CheckboxProps = {
  checked?: boolean;
  onClick?: (value: boolean) => void;
  size?: "medium" | "small";
} & Omit<ButtonBaseProps, "onClick">;

/**
 * @component Checkbox
 */
function Checkbox({
  checked,
  className,
  onClick = () => {},
  size = "medium",
  ...rest
}: CheckboxProps) {
  const classes = useStyles({ size });

  const [_checked, setChecked] = useState<boolean>(!!checked);

  const onButtonClick = () => {
    // setChecked((prevState) => {
    //   const newValue = !prevState;

    //   return newValue;
    // });

    onClick(!!checked);
  };

  useEffect(() => {
    setChecked(!!checked);
  }, [checked]);

  const rootClasses = clsx(classes.root, className);
  const checkboxClasses = clsx(classes.checkbox, {
    [classes.checkboxChecked]: _checked,
  });

  return (
    <ButtonBase className={rootClasses} onClick={onButtonClick} {...rest}>
      <span className={checkboxClasses}></span>
    </ButtonBase>
  );
}

export default Checkbox;
