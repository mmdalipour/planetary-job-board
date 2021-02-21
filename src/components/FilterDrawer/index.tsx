import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "components/shared/Checkbox";
import Typography from "components/shared/Typography";

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF } from "constants/spacing";
import { JOB_FILEDS, JOB_TYPES } from "constants/index";
import { useFilterState } from "providers/FilterProvider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 300,
  },
  drawerWrapper: {
    padding: theme.spacing(SPACING),
    height: "100%",
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(SPACING_HALF),
  },
  drawerSection: {
    marginBottom: theme.spacing(SPACING),
  },
  title: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  listWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  formLabel: {
    padding: 0,
  },
}));

export type FilterDrawerProps = DrawerProps;

/**
 * @component FilterDrawer
 */
function FilterDrawer({ open, ...rest }: FilterDrawerProps) {
  const classes = useStyles();

  const [filter, setFilter] = useFilterState();
  const [jobFields, setJobFields] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);

  const handleJobTypeChange = (jobType: string) => {
    setJobTypes((prevState) => {
      let temp = [...prevState];

      const index = temp?.findIndex((item) => item === jobType);
      if (index > -1) {
        temp.splice(index, 1);
      } else {
        temp = [...temp, jobType];
      }

      return temp;
    });
  };

  const handleJobFieldChange = (jobField: string) => {
    setJobFields((prevState) => {
      let temp = [...prevState];

      const index = temp?.findIndex((item) => item === jobField);
      if (index > -1) {
        temp.splice(index, 1);
      } else {
        temp = [...temp, jobField];
      }

      return temp;
    });
  };

  const handleApplyFilter = () => {
    setFilter({ ...filter, jobFields, jobTypes });
  };

  const handleDrawerEnter = () => {
    setJobFields(filter.jobFields);
    setJobTypes(filter.jobTypes);
  };

  return (
    <Drawer
      SlideProps={{ onEnter: handleDrawerEnter }}
      open={open}
      variant="temporary"
      classes={{ paper: classes.root }}
      {...rest}
    >
      <div className={classes.drawerWrapper}>
        <div className={classes.drawerSection}>
          <div className={classes.titleWrapper}>
            <Typography noWrap component="span">
              {jobTypes.length}
              <Typography color="textSecondary" noWrap component="span">
                /{JOB_TYPES.length}
              </Typography>
            </Typography>
            <Typography
              letterSpacing={SPACING_DOUBLE}
              noWrap
              className={classes.title}
            >
              JOB TYPE
            </Typography>
          </div>

          <div className={classes.listWrapper}>
            {JOB_TYPES.map((jobType) => (
              <ListItem
                key={jobType}
                button
                className={classes.formLabel}
                onClick={() => handleJobTypeChange(jobType)}
              >
                <Checkbox checked={jobTypes.includes(jobType)} />
                <Typography>{jobType.toUpperCase()}</Typography>
              </ListItem>
            ))}
          </div>
        </div>
        <div className={classes.drawerSection}>
          <div className={classes.titleWrapper}>
            <Typography noWrap component="span">
              {jobFields.length}
              <Typography color="textSecondary" noWrap component="span">
                /{JOB_FILEDS.length}
              </Typography>
            </Typography>
            <Typography
              noWrap
              letterSpacing={SPACING_DOUBLE}
              className={classes.title}
            >
              JOB FIELDS
            </Typography>
          </div>

          <div className={classes.listWrapper}>
            {JOB_FILEDS.map((field) => (
              <ListItem
                key={field}
                button
                className={classes.formLabel}
                onClick={() => handleJobFieldChange(field)}
              >
                <Checkbox checked={jobFields.includes(field)} />
                <Typography>{field.toUpperCase()}</Typography>
              </ListItem>
            ))}
          </div>
        </div>

        <Button
          onClick={handleApplyFilter}
          fullWidth
          variant="contained"
          color="primary"
        >
          Apply Filter
        </Button>
      </div>
    </Drawer>
  );
}

export default FilterDrawer;
