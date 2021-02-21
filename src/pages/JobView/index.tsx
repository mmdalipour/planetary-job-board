import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Typography from "components/shared/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

// icons
import RocketIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import CalendarIcon from "@material-ui/icons/CalendarToday";

// constants
import {
  SPACING,
  SPACING_DOUBLE,
  SPACING_HALF,
  SPACING_LEAST,
} from "constants/spacing";
import { Job, Jobs } from "constants/index";
import { getDisplayDate } from "utils";

const useStyles = makeStyles((theme: Theme) => ({
  brandImage: {
    width: 124,
    height: 124,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: theme.spacing(SPACING_HALF),
  },
  paper: {
    padding: theme.spacing(SPACING),
    marginBottom: theme.spacing(SPACING),

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(SPACING_DOUBLE),
    },
  },
  title: {
    marginBottom: theme.spacing(SPACING_HALF),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(SPACING_DOUBLE, 0),
  },
  calendarWrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(SPACING),
  },
  icon: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  divider: {
    margin: theme.spacing(SPACING, 0),
  },
  skillChip: {
    margin: theme.spacing(SPACING_LEAST),
    "&:first-child": {
      marginLeft: 0,
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
}));

export type JobViewProps = {
  match: any;
};

/**
 * @component JobView
 */
function JobView({ match }: JobViewProps) {
  const classes = useStyles();

  const [job, setJob] = useState<Job | undefined>(undefined);

  const id = match.params.id;

  useEffect(() => {
    const targetJob = Jobs.find((_) => _._id === id);
    setJob(targetJob);
  }, []);

  if (job && !!id) {
    return (
      <div>
        <div className={classes.header}>
          <img
            className={classes.brandImage}
            src={job.company.image}
            alt={`${job.company.name} logo`}
          />

          <Typography gutterBottom fontWeight="bold">
            {job.jobField.toUpperCase()}
          </Typography>
          <Typography gutterBottom variant="h1" fontWeight={600}>
            {job.company.name.toUpperCase()}
          </Typography>
          <Typography gutterBottom color="primary" fontWeight="bold">
            {job.jobType.toUpperCase()}
          </Typography>

          <div className={classes.calendarWrapper}>
            <CalendarIcon
              fontSize="small"
              className={classes.icon}
              color="inherit"
            />
            <Typography
              letterSpacing={SPACING_HALF}
              fontWeight={600}
              color="inherit"
            >
              {getDisplayDate(
                job.date.getFullYear(),
                job.date.getMonth(),
                job.date.getDate()
              )}
            </Typography>
          </div>
        </div>

        <Paper elevation={2} className={classes.paper}>
          <Typography
            variant="h4"
            letterSpacing={SPACING_DOUBLE * 2}
            fontWeight={500}
            className={classes.title}
          >
            NESSARAY SKILLS
          </Typography>

          <div>
            {job.necessarySkills.map((skill, index) => (
              <Chip
                key={index}
                className={classes.skillChip}
                color="primary"
                label={skill}
              />
            ))}
          </div>

          <Divider variant="fullWidth" className={classes.divider} light />

          <Typography
            variant="h4"
            letterSpacing={SPACING_DOUBLE * 2}
            fontWeight={500}
            className={classes.title}
          >
            WHERE WE ARE?
          </Typography>
          <Typography fontWeight="bold" color={job.location.color}>
            {job.location.name.toUpperCase()}
          </Typography>
        </Paper>

        <Paper elevation={2} className={classes.paper}>
          <Typography
            variant="h4"
            letterSpacing={SPACING_DOUBLE * 2}
            fontWeight={500}
            className={classes.title}
          >
            JOB DESCRIPTION
          </Typography>
          <Typography>{job.description}</Typography>
          <Divider variant="fullWidth" light className={classes.divider} />

          <Typography
            variant="h4"
            letterSpacing={SPACING_DOUBLE * 2}
            fontWeight={500}
            className={classes.title}
          >
            CONTACT US
          </Typography>
          <IconButton color="primary">
            <RocketIcon />
          </IconButton>

          <IconButton color="primary">
            <MailIcon />
          </IconButton>
        </Paper>
      </div>
    );
  } else {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Typography variant="h1" letterSpacing={SPACING}>
          NOT FOUND
        </Typography>
      </Box>
    );
  }
}

export default JobView;
