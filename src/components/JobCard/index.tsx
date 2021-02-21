import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

// constants
import { Jobs, Job } from "constants/index";
import { SPACING_HALF, SPACING_LEAST } from "constants/spacing";

// images
import EarthImage from "assets/images/earth.png";
import { getDisplayDate } from "utils";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(SPACING_HALF),
    cursor: "pointer",
    transition: theme.transitions.create(["transform"]),
    "&:hover": {
      transform: "scale(1.01)",
    },
    "&:active": {
      transform: "scale(0.99)",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  brandImage: {
    borderRadius: "50%",
    objectFit: "cover",
    width: 58,
    height: 58,
    objectPosition: "center",
    marginRight: theme.spacing(SPACING_HALF),
  },
  cardContent: {
    flex: 1,
  },
  locationWrapper: {
    display: "flex",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bolder",
  },
  semiBold: {
    fontWeight: 500,
  },
  locationImage: {
    width: 20,
    height: 20,
    margin: theme.spacing(0, SPACING_LEAST / 2),
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
}));

export type JobCardProps = Job;

/**
 * @component JobCard
 */
function JobCard({
  _id,
  company,
  jobField,
  description,
  jobType,
  location,
  necessarySkills,
  title,
  date,
}: JobCardProps) {
  const classes = useStyles();

  return (
    <Link to={`/jobs/${_id}`}>
      <Paper className={classes.root} variant="elevation">
        <div className={classes.wrapper}>
          <img
            className={classes.brandImage}
            src={company.image}
            alt={`${company.name} logo`}
          />

          <div className={classes.contentWrapper}>
            <Typography>{title}</Typography>

            <ListItemText
              primaryTypographyProps={{
                className: classes.boldText,
              }}
              primary={jobField.toUpperCase()}
              secondary={company.name}
              className={classes.cardContent}
            />
          </div>

          <div className={classes.locationWrapper}>
            <Typography color="textSecondary" className={classes.semiBold}>
              FROM
            </Typography>
            <img
              className={classes.locationImage}
              alt="location"
              src={location.image}
            />
            <Typography color="textSecondary" className={classes.semiBold}>
              TODAY
            </Typography>
          </div>
        </div>
      </Paper>
    </Link>
  );
}

export default JobCard;
