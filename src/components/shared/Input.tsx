import { useState, ChangeEvent, useEffect, ReactNode } from "react";
import { useTheme } from "@material-ui/core";

import clsx from "clsx";

// constants
import { BORDER_RADIUS, SPACING_HALF, SPACING_LEAST } from "constants/spacing";

// components
import Paper from "@material-ui/core/Paper";
import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";

// icons
import Close from "@material-ui/icons/Close";

export type InputProps = {
  value?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?: (value: string) => void;
  disableClearButton?: boolean;
  rounded?: boolean;
} & Omit<InputBaseProps, "onChange">;

/**
 * @component Input
 * @summary shared Input
 */
function Input({
  value = "",
  startAdornment,
  endAdornment,
  rounded = false,
  disableClearButton,
  onChange = () => {},
  className,
  ...rest
}: InputProps) {
  const theme = useTheme();

  const [_value, setValue] = useState<string>(value);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;
    setValue(value);
    onChange(value);
  };

  const onClear = () => {
    const value = "";
    setValue(value);
    onChange(value);
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  const borderRadius = rounded ? BORDER_RADIUS * 10 : "auto";

  const rootClasses = clsx(className);

  return (
    <Paper
      elevation={0}
      variant="outlined"
      style={{ borderRadius: borderRadius }}
      data-testid="custom-input"
      className={rootClasses}
    >
      <Box
        display="flex"
        px={SPACING_LEAST}
        py={SPACING_LEAST}
        alignItems="center"
      >
        {startAdornment}
        <Box flex={1} ml={SPACING_LEAST}>
          <InputBase
            fullWidth
            aria-label="core-input"
            value={_value}
            onChange={onValueChange}
            {...rest}
          />
        </Box>
        {!disableClearButton && (
          <Fade in={_value.length > 0} data-testid="input-clear-button">
            <Box mr={endAdornment ? SPACING_HALF : 0}>
              <IconButton onClick={onClear} size="small">
                <Close fontSize="small" />
              </IconButton>
            </Box>
          </Fade>
        )}
        {endAdornment}
      </Box>
    </Paper>
  );
}

export default Input;
