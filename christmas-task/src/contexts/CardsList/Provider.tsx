import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Context from './Context';
import { SLIDER_DEFAULTS } from '../../constans';

interface FilterByValueState {
  shape: string[];
  color: string[];
  size: string[];
  favorite: string[];
}

const filterByValueDefaultValue = {
  shape: [],
  color: [],
  size: [],
  favorite: [],
};

const sortDefaultValue = 'sort-name-min-to-max';

const Provider: React.FC = ({ children }) => {
  const [filterByValue, setFilterState] = useState<FilterByValueState>(
    JSON.parse(localStorage.getItem('filter') || '[]').filterByValue || filterByValueDefaultValue
  );

  const [startCountValue, setStartCountValue] = useState(
    JSON.parse(localStorage.getItem('filter') || '[]').startCountValue || SLIDER_DEFAULTS.count.min
  );
  const [endCountValue, setEndCountValue] = useState(
    JSON.parse(localStorage.getItem('filter') || '[]').endCountValue || SLIDER_DEFAULTS.count.max
  );
  const [startYearValue, setStartYearValue] = useState(
    JSON.parse(localStorage.getItem('filter') || '[]').startYearValue || SLIDER_DEFAULTS.year.min
  );
  const [endYearValue, setEndYearValue] = useState(
    JSON.parse(localStorage.getItem('filter') || '[]').endYearValue || SLIDER_DEFAULTS.year.max
  );

  const [searchString, setSearchString] = useState('');

  const [sortValue, setSortValue] = useState(sortDefaultValue);

  const handleChangeSort = useCallback((event: React.ChangeEvent<HTMLSelectElement>): void => {
    const valueType = event.target.value;
    setSortValue(valueType);
  }, []);

  const handleSearchString = useCallback((value: string): void => {
    setSearchString(value);
  }, []);

  const handleFilterChange = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      const valueType = (event.target as HTMLFormElement).name as keyof FilterByValueState;
      setFilterState((prevState) => {
        if (prevState[valueType].includes((event.target as HTMLFormElement).id as string)) {
          return {
            ...prevState,
            [valueType]: prevState[valueType].filter((elem: string) => elem !== (event.target as HTMLFormElement).id),
          };
        }
        return {
          ...prevState,
          [valueType]: [...prevState[valueType], (event.target as HTMLFormElement).id],
        };

        return prevState;
      });
    },
    [setFilterState]
  );

  const handleCountSlider = useCallback(
    (sliderVal: string[]): void => {
      setStartCountValue(parseInt(sliderVal[0], 10));
      setEndCountValue(parseInt(sliderVal[1], 10));
    },
    [setStartCountValue, setEndCountValue]
  );

  const handleYearSlider = useCallback(
    (sliderVal: string[]): void => {
      setStartYearValue(parseInt(sliderVal[0], 10));
      setEndYearValue(parseInt(sliderVal[1], 10));
    },
    [setStartYearValue, setEndYearValue]
  );

  const handleFilterClear = useCallback(() => {
    setStartYearValue(SLIDER_DEFAULTS.year.min);
    setEndYearValue(SLIDER_DEFAULTS.year.max);
    setStartCountValue(SLIDER_DEFAULTS.count.min);
    setEndCountValue(SLIDER_DEFAULTS.count.max);
    setFilterState(filterByValueDefaultValue);
  }, [setStartYearValue, setEndYearValue, setStartCountValue, setEndCountValue, setFilterState]);

  const contextValue = useMemo(
    () => ({
      sortValue,
      searchString,
      filterByValue,
      startCountValue,
      endCountValue,
      startYearValue,
      endYearValue,
      handleChangeSort,
      handleSearchString,
      handleFilterChange,
      handleCountSlider,
      handleYearSlider,
      handleFilterClear,
    }),
    [
      sortValue,
      searchString,
      filterByValue,
      startCountValue,
      endCountValue,
      startYearValue,
      endYearValue,
      handleChangeSort,
      handleSearchString,
      handleFilterChange,
      handleCountSlider,
      handleYearSlider,
      handleFilterClear,
    ]
  );

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(contextValue));
  }, [contextValue]);

  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
