import React from 'react';
import FilterByValue from '../FilterByValue';
import FilterByRange from '../FilterByRange';
import SortCards from '../SortCards';

import './index.scss';

const FilterCards: React.FC = () => (
  <div className=" filter-container">
    <FilterByValue />
    <FilterByRange />
    <SortCards />
  </div>
);

export default FilterCards;
