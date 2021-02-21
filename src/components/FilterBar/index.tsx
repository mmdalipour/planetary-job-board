import { makeStyles } from "@material-ui/core/styles";

import { SPACING_LEAST } from "constants/spacing";

// components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Jobs from "constants";
import { t } from "@lingui/macro";
import { Trans } from "@lingui/macro";

// providers
// import { useSearchSetState, useSearchState } from "providers/FilterProvider";

const useStyles = makeStyles((theme) => ({}));

export type CategoryMenu = {};

export type FilterBarProps = {};
/**
 * @component FilterBar
 * @summary FilterBar component with two stage of auth and unauth
 */
function FilterBar({}: FilterBarProps) {
  const classes = useStyles();

  // const [search, setSearch] = useSearchState();

  // console.log(search);

  // const onJobTypeSelectChange = (values: string[]) => {
  //   setSearch((prevState) => ({
  //     ...prevState,
  //     filters: {
  //       ...(prevState as any).filters,
  //       jobTypes: values,
  //     },
  //   }));
  // };

  // const onNecessarySkillsSelectChange = (values: string[]) => {
  //   setSearch((prevState) => ({
  //     ...prevState,
  //     filters: {
  //       ...(prevState as any).filters,
  //       necessarySkills: values,
  //     },
  //   }));
  // };

  // const onClearFilterClick = () => {
  //   setSearch((prevState) => {
  //     return { ...prevState, filters: {} };
  //   });
  // };

  return (
    <AppBar color="default" position="relative">
      {/* <Toolbar>
        <Box flex={1} display="flex" py={SPACING_LEAST}>
          <Box mx={SPACING_LEAST}>
            <Autocomplete
              onChange={(event, values) => onJobTypeSelectChange(values)}
              fullWidth
              multiple
              id="tags-outlined"
              options={[...new Set(Jobs.map((_) => _.jobType))]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  style={{ width: 300 }}
                  {...params}
                  variant="outlined"
                  placeholder={t`Job Types`}
                  fullWidth
                />
              )}
            />
          </Box>

          <Box mx={SPACING_LEAST}>
            <Autocomplete
              onChange={(event, values) =>
                onNecessarySkillsSelectChange(values)
              }
              fullWidth
              multiple
              id="tags-outlined"
              options={[...new Set(Jobs.map((_) => _.necessarySkills).flat())]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  style={{ width: 300 }}
                  {...params}
                  variant="outlined"
                  placeholder={t`Necessary Skills`}
                  fullWidth
                />
              )}
            />
          </Box>
        </Box>
        <Button
          onClick={onClearFilterClick}
          variant="contained"
          color="primary"
        >
          <Trans>Clear Filter</Trans>
        </Button>
      </Toolbar> */}
    </AppBar>
  );
}

export default FilterBar;
