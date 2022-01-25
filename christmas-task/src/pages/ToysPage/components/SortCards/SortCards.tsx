import React from 'react';
import Select from '../Select';
import useCardsListContext from '../../../../contexts/CardsList';

import './index.scss';

const SortCards: React.FC = () => {
  const filters = useCardsListContext();

  const handleResetFilters = filters.handleFilterClear;

  const handleClearLocalStorage = () => localStorage.clear();

  return (
    <div className=" filter filter-sort">
      <h2 className="filter-title">Сортировка</h2>
      <Select onChange={filters.handleChangeSort} />
      <button className="button-reset" type="button" onClick={handleResetFilters}>
        Сброс фильтров
      </button>
      <button className="button-reset" type="button" onClick={handleClearLocalStorage}>
        Очистить хранилище данных
      </button>
    </div>
  );
};

export default SortCards;
