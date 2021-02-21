import { PlanetObject } from "constants/index";
import {
  useContext,
  useState,
  createContext,
  SetStateAction,
  ReactNode,
  Dispatch,
} from "react";

export type Filter = {
  search: string;
  locations: PlanetObject[];
  order: string;
  jobTypes: string[];
  jobFields: string[];
};
type ContextProps = Filter;

type ProviderProps = {
  children: ReactNode;
  Filter?: Filter;
};

const defualtValue: Filter = {
  search: "",
  locations: [],
  order: "newest",
  jobTypes: [],
  jobFields: [],
};

// initialize Filter context
const FilterContextValue = createContext<ContextProps>(defualtValue);
const FilterContextSetState = createContext<
  Dispatch<SetStateAction<ContextProps>>
>(() => null);

/**
 * @provider FilterProvider
 * @summary Filter provider use this at top of the react tree to get Filter data on every level
 * @param {ReactNode} children
 */
function FilterProvider({ children }: ProviderProps) {
  const [filter, setFilter] = useState<ContextProps>(defualtValue);

  return (
    <FilterContextValue.Provider value={filter}>
      <FilterContextSetState.Provider value={setFilter}>
        {children}
      </FilterContextSetState.Provider>
    </FilterContextValue.Provider>
  );
}

/**
 * @function useFilterState
 * @summary returns Filter state and Filter set state just like out trusty useState
 * @returns {FilterFiltersStateType} tuple of Filter and setFilter
 */
export type UseFilterStateType = [Filter, Dispatch<SetStateAction<Filter>>];
function useFilterState() {
  const filter = useContext(FilterContextValue);
  const setFilter = useContext(FilterContextSetState);
  const state: UseFilterStateType = [filter, setFilter];
  return state;
}

/**
 * @function useFilterValue
 * @summary returns filter state as partial
 * @returns {Partial<Filter>} filter
 */
function useFilterValue(): Filter {
  const filter = useContext(FilterContextValue);
  return filter;
}

/**
 * @function useFilterSetState
 * @summary returns Filter set state
 * @returns {SetStateAction<Filter>} setFilter
 */
function useFilterSetState(): Dispatch<SetStateAction<Filter>> {
  const setFilter = useContext(FilterContextSetState);
  return setFilter;
}

export { FilterProvider, useFilterState, useFilterValue, useFilterSetState };
