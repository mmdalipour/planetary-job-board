import { useState, Fragment } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import PlanetWithTitle, {
  PlanetWithTitleProps as Planet,
} from "components/PlanetWithTitle";
import Select from "components/shared/Select";

// providers
import { useFilterState } from "providers/FilterProvider";

// constants
import { PLANETS, PlanetObject } from "constants/index";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
}));

export type PlanetFilterBarProps = {
  shrink?: boolean;
};

/**
 * @component PlanetFilterBar
 */
function PlanetFilterBar({ shrink }: PlanetFilterBarProps) {
  const classes = useStyles();

  const [filter, setFilter] = useFilterState();

  const isActive = (planetName: string): boolean =>
    filter?.locations?.findIndex((_) => _.name === planetName) > -1;

  const handlePlanetClick = (planet: PlanetObject) => {
    const index = filter?.locations?.findIndex((_) => _.name === planet.name);
    if ((index as number) > -1) {
      setFilter((prevState) => {
        const newState = { ...prevState };
        newState.locations.splice(index as number, 1);
        return newState;
      });
    } else {
      setFilter((prevState) => ({
        ...prevState,
        locations: [...prevState.locations, planet],
      }));
    }
  };

  return (
    <Fragment>
      {!shrink && (
        <div className={classes.root}>
          {PLANETS.map((planet) => (
            <PlanetWithTitle
              key={planet.name}
              {...planet}
              selected={isActive(planet.name)}
              onClick={() => handlePlanetClick(planet)}
            />
          ))}
        </div>
      )}
      {shrink && (
        <Select
          label="LOCATION"
          selected={filter.locations.map((_) => _.name)}
          onChange={(value) => {
            const planetObjectList = value.map((_) =>
              PLANETS.find((planet) => planet.name === _._id)
            );
            setFilter((prevState) => ({
              ...prevState,
              locations: planetObjectList as PlanetObject[],
            }));
          }}
          multiSelect
          options={PLANETS.map((planet) => ({
            _id: planet.name,
            label: planet.name.toUpperCase(),
          }))}
        />
      )}
    </Fragment>
  );
}

export default PlanetFilterBar;
