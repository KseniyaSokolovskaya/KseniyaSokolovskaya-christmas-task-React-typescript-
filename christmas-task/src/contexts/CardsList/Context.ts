import React from 'react';

export interface CardsListContext {
  sortValue: string;
  searchString: string;
  filterByValue: {
    shape: string[];
    color: string[];
    size: string[];
    favorite: string[];
  };
  handleFilterChange(event: React.FormEvent<HTMLFormElement>): void;
  handleChangeSort(event: React.ChangeEvent<HTMLSelectElement>): void;
  handleFilterClear(): void;
  startCountValue: number;
  endCountValue: number;
  startYearValue: number;
  endYearValue: number;
  handleSearchString(value: string): void;
  handleCountSlider(sliderVal: string[]): void;
  handleYearSlider(sliderVal: string[]): void;
}

const defaultContext: CardsListContext = {
  sortValue: '',
  searchString: '',
  filterByValue: {
    shape: [],
    color: [],
    size: [],
    favorite: [],
  },
  startCountValue: 0,
  endCountValue: 0,
  startYearValue: 0,
  endYearValue: 0,
  handleCountSlider: () => {
    //
  },
  handleSearchString: () => {
    //
  },
  handleYearSlider: () => {
    //
  },
  handleFilterChange: () => {
    //
  },
  handleFilterClear: () => {
    //
  },
  handleChangeSort: () => {
    //
  },
};

const BasketContext = React.createContext<CardsListContext>(defaultContext);

export default BasketContext;
