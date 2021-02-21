import { useState } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";

import {
  SPACING,
  SPACING_DOUBLE,
  SPACING_HALF,
  SPACING_LEAST,
} from "constants/spacing";

import _ from "lodash";

// components
import JobCard from "components/JobCard";
import Grid from "@material-ui/core/Grid";
import Typography from "components/shared/Typography";
import SearchBar from "components/SearchBar";
import PlanetFilterBar from "components/PlanetFilterBar";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import FilterDrawer from "components/FilterDrawer";
import Select, { Option } from "components/shared/Select";

// constants
import { Jobs as JobList } from "constants/index";

// providers
import { useFilterState } from "providers/FilterProvider";

// icons
import FilterIcon from "@material-ui/icons/FilterListOutlined";
// translate
import { t } from "@lingui/macro";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  titleWrapper: {
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  searchBar: {
    width: 600,
    marginTop: theme.spacing(SPACING),
    [theme.breakpoints.down("sm")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(SPACING_HALF),
  },
  grid: {
    marginBottom: theme.spacing(SPACING_DOUBLE),
  },
  cardsParent: {
    display: "grid",
    marginBottom: "12px",
  },
  filterActionBar: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(SPACING, 0, SPACING_DOUBLE, 0),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  filterButton: {
    "&:first-child": {
      marginRight: theme.spacing(SPACING_LEAST),
      [theme.breakpoints.down("xs")]: {
        margin: 0,
      },
    },
    "&:last-child": {
      marginLeft: theme.spacing(SPACING_LEAST),
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(SPACING_LEAST),
        marginLeft: 0,
        width: "100%",
      },
    },
  },
  filterSelectWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(SPACING_HALF),
    },
  },
  filterButtonWrapper: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export type JobsProps = {};

/**
 * @component Jobs
 */
function Jobs({}: JobsProps) {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const [filter, setFilter] = useFilterState();

  const getFilteredJobs = () => {
    // filter logic here
    const searchTerm: string = filter.search;
    let result = [...JobList];

    console.log(result);

    // filter search
    result = result.filter(
      (job) =>
        !job.title?.toLowerCase().search(searchTerm) ||
        !job.company.name?.toLowerCase().search(searchTerm)
    );

    // filter location
    const locations = filter.locations;
    if (locations.length > 0) {
      result = result.filter(
        (job) =>
          locations.findIndex(
            (location) => location.name === job.location.name
          ) > -1
      );
    }

    // filter job types
    const jobTypes = filter.jobTypes;
    if (jobTypes.length > 0) {
      result = result.filter(
        (job) => jobTypes.findIndex((jobType) => jobType === job.jobType) > -1
      );
    }

    // filter job fields
    const jobFields = filter.jobFields;
    if (jobFields.length > 0) {
      result = result.filter(
        (job) =>
          jobFields.findIndex((jobField) => jobField === job.jobField) > -1
      );
    }

    return result;
  };

  const onFilterButtonClick = () => {
    setOpenDrawer(true);
  };

  const handleSearchInput = (value: string) => {
    setFilter({ ...filter, search: value });
  };

  const handleClearFilter = () => {
    setFilter({
      search: "",
      locations: [],
      order: t`newest`,
      jobFields: [],
      jobTypes: [],
    });
  };

  return (
    <div className={classes.root}>
      <FilterDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />

      <div className={classes.titleWrapper}>
        <Typography
          variant="h2"
          letterSpacing={SPACING_DOUBLE}
          fontWeight={500}
        >
          <Trans>Job List</Trans>
        </Typography>
        <SearchBar
          value={filter.search}
          placeholder={t`search for job title`}
          className={classes.searchBar}
          onChange={handleSearchInput}
        />
      </div>

      <Hidden mdDown>
        <PlanetFilterBar />
      </Hidden>

      <div className={classes.filterActionBar}>
        <div className={classes.filterButtonWrapper}>
          <Button
            onClick={onFilterButtonClick}
            className={classes.filterButton}
            variant="contained"
            color="primary"
            startIcon={<FilterIcon />}
          >
            <Trans>Advanced Filter</Trans>
          </Button>
          <Button
            className={classes.filterButton}
            variant="outlined"
            color="primary"
            onClick={handleClearFilter}
          >
            <Trans>Clear Filter</Trans>
          </Button>
        </div>

        <div className={classes.filterSelectWrapper}>
          <Hidden lgUp>
            <PlanetFilterBar shrink />
          </Hidden>

          <Select
            onChange={(value: Option) => {
              setFilter({
                ...filter,
                order: value.label.toLowerCase().replace(" ", ""),
              });
            }}
            selected={filter.order}
            label={t`SORT BY`}
            options={[
              { _id: t`newest`, label: t`NEWEST` },
              { _id: t`oldest`, label: t`OLDEST` },
              { _id: t`mostpaid`, label: t`MOST PAID` },
            ]}
          />
        </div>
      </div>

      <div>
        <Typography
          className={classes.title}
          variant="h4"
          gutterBottom
          color="textSecondary"
        >
          <Trans>TODAY</Trans>
        </Typography>
        <div className={classes.cardsParent}>
          <Grid container spacing={SPACING_HALF}>
            {getFilteredJobs().map((job, index) => (
              <Fade
                in={true}
                timeout={{ enter: 2 * 100 * (index + 1) }}
                key={job._id}
              >
                <Grid item xs={12} md={6}>
                  <JobCard {...job} />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
